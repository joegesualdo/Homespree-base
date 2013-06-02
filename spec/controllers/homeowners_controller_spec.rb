require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe HomeownersController do

  # This should return the minimal set of attributes required to create a valid
  # Homeowner. As you add validations to Homeowner, be sure to
  # update the return value of this method accordingly.
  def valid_attributes
    { "email" => "MyString" }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # HomeownersController. Be sure to keep this updated too.
  def valid_session
    {}
  end

  describe "GET index" do
    it "assigns all homeowners as @homeowners" do
      homeowner = Homeowner.create! valid_attributes
      get :index, {}, valid_session
      assigns(:homeowners).should eq([homeowner])
    end
  end

  describe "GET show" do
    it "assigns the requested homeowner as @homeowner" do
      homeowner = Homeowner.create! valid_attributes
      get :show, {:id => homeowner.to_param}, valid_session
      assigns(:homeowner).should eq(homeowner)
    end
  end

  describe "GET new" do
    it "assigns a new homeowner as @homeowner" do
      get :new, {}, valid_session
      assigns(:homeowner).should be_a_new(Homeowner)
    end
  end

  describe "GET edit" do
    it "assigns the requested homeowner as @homeowner" do
      homeowner = Homeowner.create! valid_attributes
      get :edit, {:id => homeowner.to_param}, valid_session
      assigns(:homeowner).should eq(homeowner)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Homeowner" do
        expect {
          post :create, {:homeowner => valid_attributes}, valid_session
        }.to change(Homeowner, :count).by(1)
      end

      it "assigns a newly created homeowner as @homeowner" do
        post :create, {:homeowner => valid_attributes}, valid_session
        assigns(:homeowner).should be_a(Homeowner)
        assigns(:homeowner).should be_persisted
      end

      it "redirects to the created homeowner" do
        post :create, {:homeowner => valid_attributes}, valid_session
        response.should redirect_to(Homeowner.last)
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved homeowner as @homeowner" do
        # Trigger the behavior that occurs when invalid params are submitted
        Homeowner.any_instance.stub(:save).and_return(false)
        post :create, {:homeowner => { "email" => "invalid value" }}, valid_session
        assigns(:homeowner).should be_a_new(Homeowner)
      end

      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        Homeowner.any_instance.stub(:save).and_return(false)
        post :create, {:homeowner => { "email" => "invalid value" }}, valid_session
        response.should render_template("new")
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested homeowner" do
        homeowner = Homeowner.create! valid_attributes
        # Assuming there are no other homeowners in the database, this
        # specifies that the Homeowner created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        Homeowner.any_instance.should_receive(:update_attributes).with({ "email" => "MyString" })
        put :update, {:id => homeowner.to_param, :homeowner => { "email" => "MyString" }}, valid_session
      end

      it "assigns the requested homeowner as @homeowner" do
        homeowner = Homeowner.create! valid_attributes
        put :update, {:id => homeowner.to_param, :homeowner => valid_attributes}, valid_session
        assigns(:homeowner).should eq(homeowner)
      end

      it "redirects to the homeowner" do
        homeowner = Homeowner.create! valid_attributes
        put :update, {:id => homeowner.to_param, :homeowner => valid_attributes}, valid_session
        response.should redirect_to(homeowner)
      end
    end

    describe "with invalid params" do
      it "assigns the homeowner as @homeowner" do
        homeowner = Homeowner.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Homeowner.any_instance.stub(:save).and_return(false)
        put :update, {:id => homeowner.to_param, :homeowner => { "email" => "invalid value" }}, valid_session
        assigns(:homeowner).should eq(homeowner)
      end

      it "re-renders the 'edit' template" do
        homeowner = Homeowner.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Homeowner.any_instance.stub(:save).and_return(false)
        put :update, {:id => homeowner.to_param, :homeowner => { "email" => "invalid value" }}, valid_session
        response.should render_template("edit")
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested homeowner" do
      homeowner = Homeowner.create! valid_attributes
      expect {
        delete :destroy, {:id => homeowner.to_param}, valid_session
      }.to change(Homeowner, :count).by(-1)
    end

    it "redirects to the homeowners list" do
      homeowner = Homeowner.create! valid_attributes
      delete :destroy, {:id => homeowner.to_param}, valid_session
      response.should redirect_to(homeowners_url)
    end
  end

end
