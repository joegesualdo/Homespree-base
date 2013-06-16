class ContractorsController < ApplicationController

  layout "static_page", except: [:show, :edit]

  def show
    @contractor = Contractor.find(params[:id])
    @specialty = Specialty.new
    @specialties = @contractor.specialties
    @photos = @contractor.photos

    @contractor = @contractor.decorate

    respond_to do |format|
      format.html { render "profile" }
      format.json { render json: @contractor }
    end
  end

  def update
    @contractor = Contractor.find(params[:id])

    if request.xhr? && !@contractor.edited?
      @contractor.update_attribute(:edited, true)
    end

    if @contractor.update_attributes(params[:contractor])
      render status: 200, nothing: true
    else
      render status: 422, nothing: true
    end
  end

end