require "spec_helper"


describe "Contractor Dashboard" do

  let(:contractor) { FactoryGirl.create :contractor }

  before do
    sign_in_contractor contractor
    click_link "Account Settings"
  end

  subject { page }

  it "is navigated to after clicking Edit Profile" do
    page.current_path.should eq "/general_settings"
  end

  describe "General Settings" do

    it "sets browser title" do
      within(:css, "#dashboard_section") do
        page.should have_content("Email")
      end
    end
  end

  describe "Notifications" do
    before { click_link "Notifications" }

    it "shows title" do
      within(:css, "#dashboard_section") do
        page.should have_content("Notifications")
      end
    end
  end

  describe "My Inbox" do
    before { click_link "My Inbox" }

    it "shows My Inbox title" do
      within(:css, "#dashboard_section") do
        page.should have_content("My Inbox")
      end
    end

  end

  describe "My Projects" do
    before do
      within(:css, "#dashboard_nav") do
        click_link "My Projects"
      end
    end

    it "shows title" do
      within(:css, "#dashboard_nav") do
        page.should have_content("My Projects")
      end
    end
  end

  describe "navigations links include" do
    specify "Notifications" do
      within(:css, "#dashboard_nav") do
        page.should have_content("Notifications")
      end
    end

    specify "General Settings" do
      within(:css, "#dashboard_nav") do
        page.should have_content("General Settings")
      end
    end

    specify "Messages" do
      within(:css, "#dashboard_nav") do
        page.should have_content("My Inbox")
      end
    end

    specify "Payment" do
      within(:css, "#dashboard_nav") do
        page.should have_content("My Income")
      end
    end

  end

  describe "clicking Cancel my account" do

    before do
      #click_link "Cancel my account"
    end

    it "redirects to home page" do

    end

    it "deletes that contractor" do

    end
  end

  describe "Changing Email" do
    before do
      fill_in "Change email", with: "changed@rspec.com"
      fill_in "Verify password", with: contractor.password
    end

  end

  describe "Changing password" do
    before do
      fill_in "Current Password", with: contractor.password
      fill_in "New Password", with: "secret_password"
      fill_in "Re-type new password", with: "secret_password"

      save_and_open page
    end
  end

  it "can navigate back to profile" do
  end

end