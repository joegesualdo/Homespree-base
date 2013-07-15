require 'spec_helper'

describe "Project Wizard" do
  let(:project) { FactoryGirl.create :project }
  subject { page }

  before(:all) do
    ProjectType.find_or_create_by_name "Interior painting"
    ProjectType.find_or_create_by_name "Exterior painting"
  end

  before do
    visit "/"
    select('Interior painting', from: "project_project_type_id")
    fill_in 'zipcode', with: '10025'
  end

  its(:current_path) { should eq "/" }
  it { should have_content "Stress-free home improvement." }

  describe "Request" do
    before do
      click_button "Get started"
    end

    it { should have_content "Interior painting" }
    its(:current_path) { should eq "/project_wizard/request" }

    it { should have_content "previous" }

    describe "Review Estimate" do
      before do
        click_button "next"
      end

      its(:current_path) { should eq "/project_wizard/review_estimates" }
      it { should have_content "Review Estimates" }

      describe "Set appointment" do
        before do
          click_link "next"
        end

        its(:current_path) { should eq "/project_wizard/appointment" }
        it { should have_content "Appointment" }

        describe "Submit project" do
          before do
            click_button "next"
          end

          its(:current_path) { should eq "/project_wizard/submit" }
          it { should have_content "Submit" }

          describe "Success page" do
            before do
              click_button "next"
            end

            its(:current_path) { should eq "/project_wizard/success" }
            it { should have_content "Submit" }
          end
        end
      end
    end
  end
end