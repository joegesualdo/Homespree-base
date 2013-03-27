module AuthHelper
  def self.http_login
    user = 'admin'
    pw = 'Meetmike'

    env = {}
    env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(user, pw)

    return env
  end

  def self.login(user)
    post "/contractors", email: user.email, title: user.company_title, password: user.email
  end
end

# Goes through the steps of signing in a new contractor
def sign_up_contractor
  @contractor = FactoryGirl.build :contractor
  visit new_contractor_registration_path

  fill_in "Email", with: @contractor.email
  fill_in "Company title", with: @contractor.company_title
  fill_in "Password", with: @contractor.password

  click_button "Sign Up"
  return @contractor
end

def sign_in_user(user)
  get "contractors/sign_in"

  fill_in "Email", with: user.email
  fill_in "Password", with: user.password

  click_button "Sign In"
end