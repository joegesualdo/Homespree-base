# == Schema Information
#
# Table name: job_categories
#
#  id                 :integer          not null, primary key
#  name               :string(255)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  categorizable_id   :integer
#  categorizable_type :string(255)

require 'spec_helper'

describe JobCategory do

  let(:job_category) { FactoryGirl.create(:job_category) }
  subject { job_category }

  # Instance methods:
  it { should respond_to :id }
  it { should respond_to :name }
  it { should respond_to :subcategories }
  it { should respond_to :categorizable_type }
  it { should respond_to :categorizable_id }
  it { should respond_to :created_at }
  it { should respond_to :updated_at }

  its(:subcategories) { should be_empty }

  it "should be valid by default" do
    job_category.should be_valid
  end

  it "is invalid without a name" do
    job_category.name = nil
    job_category.should_not be_valid
  end

  describe "with subcategories" do
    let(:job_subcategory) { FactoryGirl.create :job_subcategory }
    before { job_category.subcategories << job_subcategory }

    it "is persisted" do
      job_category.should be_persisted
      job_category.should be_valid
    end

    it "has one job category" do
      job_category.subcategories.length.should eq 1
    end

    it "creates a subcategory" do
      job_category.subcategories.should eq [job_subcategory]
    end

    it "can add another subcategory" do
      subcategory = FactoryGirl.create :job_subcategory
      job_category.subcategories << subcategory

      job_category.subcategories.should eq [job_subcategory, subcategory]
    end

  end

end
