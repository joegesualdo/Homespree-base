class Users::MessagesController < ApplicationController
  #before_filter :authenticate_user!
  before_filter :get_mailbox, :get_box, :get_user

  def index
    redirect_to users_conversations_path(:box => @box)
  end

  # GET /messages/1
  # GET /messages/1.xml
  def show
    if @message = Message.find_by_id(params[:id]) and @conversation = @message.conversation
      if @conversation.is_participant?(@user)
        redirect_to conversation_path(@conversation, :box => @box, :anchor => "message_" + @message.id.to_s)
        return
      end
    end
    redirect_to users_conversations_path(:box => @box)
  end

  # GET /messages/new
  # GET /messages/new.xml
  def new
    if params[:receiver].present?
      @recipient = User.find_by_slug(params[:receiver])
      return if @recipient.nil?
      @recipient = nil if @recipient == current_subject
    end
  end

  # GET /messages/1/edit
  def edit

  end

  # POST /messages
  # POST /messages.xml
  def create
    @recipients =
      if params[:_recipients].present?
        @recipients = params[:_recipients].split(',').map{ |r| User.find(r) }
      else
        []
      end

    @receipt = @user.send_message(@recipients, params[:body], params[:subject])
    if (@receipt.errors.blank?)
      @conversation = @receipt.conversation
      flash[:success]= t('mailboxer.sent')
      redirect_to users_conversation_path(@conversation, :box => :sentbox)
    else
      render :action => :new
    end
  end

  # PUT /messages/1
  # PUT /messages/1.xml
  def update

  end

  # DELETE /messages/1
  # DELETE /messages/1.xml
  def destroy

  end

  private

  def get_mailbox
    @mailbox = current_user.mailbox
  end

  def get_user
    @user = current_user
  end

  def get_box
    if params[:box].blank? or !["inbox","sentbox","trash"].include? params[:box]
      @box = "inbox"
      return
    end
    @box = params[:box]
  end
end