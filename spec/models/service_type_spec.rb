# == Schema Information
#
# Table name: service_types
#
#  id                 :integer          not null, primary key
#  name               :string(255)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  categorizable_id   :integer
#  categorizable_type :string(255)
#  params             :text
#  position           :integer
#

require 'spec_helper'

describe ServiceType do

  let(:project_type) { FactoryGirl.create(:project_type) }
  subject { project_type }

  # Instance methods:
  it { should respond_to :id }
  it { should respond_to :name }
  it { should respond_to :subcategories }
  it { should respond_to :categorizable_type }
  it { should respond_to :categorizable_id }
  it { should respond_to :created_at }
  it { should respond_to :updated_at }
  it { should respond_to :params }

  its(:subcategories) { should be_empty }

  it "should be valid by default" do
    project_type.should be_valid
  end

  it "is invalid without a name" do
    project_type.name = nil
    project_type.should_not be_valid
  end

  describe "with subcategories" do
    let(:project_subcategory) { FactoryGirl.create :project_subcategory }
    before { project_type.subcategories << project_subcategory }

    it "is persisted" do
      project_type.should be_persisted
      project_type.should be_valid
    end

    it "has one job category" do
      project_type.subcategories.length.should eq 1
    end

    it "creates a subcategory" do
      project_type.subcategories.should eq [project_subcategory]
    end

    it "can add another subcategory" do
      subcategory = FactoryGirl.create :project_subcategory
      project_type.subcategories << subcategory

      project_type.subcategories.should eq [project_subcategory, subcategory]
    end

  end

  describe "stores and retrieves params" do

    describe "concrete" do
      before do
        params = {
          location: "Interior",
          desired_finish: "Stain / Coloring",
          dimensions: "Square Feet"
        }
        project_type.params = params
        project_type.save!
      end

      xit "saves location" do
        project_type.params['location'].should eq "Interior"
      end

      xit "saves desired finish" do
        project_type.params['desired_finish'].should eq "Stain / Coloring"
      end

    end

    describe "Deck" do

    end

    describe "Doors" do

    end

    describe "Exterior" do

    end

    describe "Faux Finish" do

    end

    describe "Fence" do

    end

    describe "Interior Painting" do

    end

    describe "Wood Floor Finishing" do

    end

    describe "Powerwashing" do

    end

    describe "Windows" do

    end

  end
end
