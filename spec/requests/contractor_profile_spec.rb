require 'spec_helper'

describe 'Contractor Profile' do

  before :each do
    visit new_contractor_session_path

    @contractor = FactoryGirl.create :contractor

    fill_in "contractor_email", with: @contractor.email
    fill_in "contractor_password", with: @contractor.password
    click_button "Create Contractor"
  end

  subject { page }

  it { page.status_code.should be 200 }
  its(:current_path) { should eq "/contractors/profiles/#{@contractor.id}" }

  describe "should render correct view" do
    it "should display Contractor Dropdown" do
      have_selector("contractor_dropdown")
    end
  end

  describe "should have links to" do
    specify "Settings" do
      click_link "Profile Settings"
    end

    specify "Messages" do
      click_link "Messages"
    end

    describe "Sign Out" do
      before do
        click_link "Sign out"
      end

      its(:current_path) { should eq root_path }
    end
  end

end