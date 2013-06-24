## Devise Helpers:
#
# contractor_signed_in?
# contractor_session
# current_contractor
# authenticate_contractor!
# after_sign_in_path_for(resource)
# after_sign_out_path_for(resource)
# after_update_path_for(resource)
# devise_error_messages!
#
class ApplicationController < ActionController::Base
  protect_from_forgery

  ## Uncomment to enable Mobile routing:
  # include Mobylette::RespondToMobileRequests
  # mobylette_config do |config|
  #   config[:skip_user_agents] = [:ipad, :kindle]
  #   config[:mobile_user_agents] = proc { %r{iphone|mobile|blackberry|nokia|palm|opera mini|windows ce}i }
  # end


  # Returns:
  # contractor if a contractor is signed in
  # homeowner if a homeowner is signed in
  # guest_homeowner if a homeowner guest is signed in
  # nil if none of the above
  def current_user
    if contractor_signed_in?
      current_contractor
    elsif homeowner_signed_in?
      if session[:guest_homeowner_id]
        # TODO: Upgrade guest_homeowner to homeowner and destroy session
        # Example:
        # logging_in
        # guest_homeowner.destroy
        # session[:guest_user_id] = nil
      end
      current_homeowner
    else
      nil
    end
  end

  def guest_homeowner
    # Cache the value:
    @cached_guest_user ||= User.find(session[:guest_homeowner_id] ||= create_guest_user.id)
  rescue ActiveRecord::RecordNotFound  # If session[:guest_homeowner_id] invalid
    session[:guest_homeowner_id] = nil
    #guest_homeowner
  end

  helper_method :current_user

  private

  # Passes off code from guest_homeowner when the homeowner
  # fully signs in.
  def convert_guest_to_homeowner
    # An example (Passing associations):
    # guest_projects = guest_homeowner.projects.all
    # guest_projects.each do |project|
    #   project.homeowner_id = current_user.id
    #   project.save!
    # end
  end

  def create_guest_homeowner
    guest_homeowner = Homeowner.new do |guest|
      guest.name = "guest"
      guest.email = "guest_homeowner_#{Time.now.to_i}#{rand(9999)}@example"
    end
    guest_homeowner.save(validate: false)

    session[:guest_homeowner_id] = guest_homeowner.id
    return guest_homeowner
  end

end