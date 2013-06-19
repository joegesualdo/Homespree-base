# == Schema Information
#
# Table name: appointments
#
#  id                      :integer          not null, primary key
#  starts_at               :datetime
#  address_id              :integer
#  photos                  :string(255)
#  reminders               :string(255)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  contractor_id           :integer
#  title                   :string(255)
#  description             :string(255)
#  homeowner_id            :integer
#  duration                :decimal(, )
#  job_id                  :integer
#  verified_by_homeowner   :boolean          default(FALSE)
#  verified_by_contractor  :boolean          default(FALSE)
#  completed_by_homeowner  :boolean          default(FALSE)
#  completed_by_contractor :boolean          default(FALSE)
#

require 'spec_helper'

describe Appointment do

  let(:appointment) { FactoryGirl.create :appointment }
  let(:contractor) { FactoryGirl.create :contractor }
  let(:homeowner) { FactoryGirl.create :homeowner }
  let(:job) { FactoryGirl.create :job }
  let(:address) { FactoryGirl.create :address }

  subject { appointment }

  # Assocations
  it { should have_one :address }
  it { should belong_to :contractor }
  it { should belong_to :homeowner }
  it { should belong_to :job }

  # Validations
  it { should validate_presence_of :starts_at }
  it { should validate_presence_of :duration }
  it { should validate_presence_of :address }

  it { should accept_nested_attributes_for :address }

  # Table columns
  it { should respond_to :address_id }
  it { should respond_to :starts_at }
  it { should respond_to :reminders }
  it { should respond_to :photos }
  it { should respond_to :title }
  it { should respond_to :description }
  it { should respond_to :verified_by_homeowner }
  it { should respond_to :verified_by_contractor }
  it { should respond_to :completed_by_homeowner }
  it { should respond_to :completed_by_contractor }

  let(:appointment) { FactoryGirl.create :appointment }


  before do
    contractor.appointments << appointment
    homeowner.appointments << appointment
    job.appointments << appointment

    appointment.address = address
  end

  it "contractor and homeowner have the same appointments" do
    contractor.appointments.should eq(homeowner.appointments)
  end

  it "should create a valid appointment" do
    appointment.should be_valid
    appointment.should be_persisted
  end

  it "should have a single association for contractor, homeowner, job, and address" do
    [:contractor, :homeowner, :job, :address].each do |association|
      appointment.send(association).should be_valid
    end
  end

  describe "belongs to a" do

    describe "contractor" do
      its(:contractor) { should eq contractor }
      it "has reverse association for jobs" do
        contractor.jobs.should include(job)
      end

      it "has reverse association for appointment" do
        contractor.appointments.should include(appointment)
      end

      it "has a homeowner through appointments" do
        contractor.homeowners.should include(homeowner)
      end
    end

    describe "homeowner" do
      its(:homeowner) { should eq homeowner }
      it "has reverse association" do
        homeowner.jobs.should include(job)
      end

      it "has a contractor through appointments" do
        homeowner.contractors.should include(contractor)
      end
    end

    describe "job" do
      its(:job) { should eq job }
      it "has reverse association" do
        contractor.jobs.should include(job)
      end

      it "for both contractor and homeowner" do
        contractor.jobs.should eq homeowner.jobs
      end
    end

  end

  describe "create a second appointment for a job" do

    let(:appointment2) { FactoryGirl.create :appointment }

    before do
      contractor.appointments << appointment2
      homeowner.appointments << appointment2
      job.appointments << appointment2

      appointment2.address = address
    end

    specify "contractor has two appointments" do
      contractor.appointments.should eq [appointment, appointment2]
    end

    specify "homeowner has two appointments" do
      homeowner.appointments.should eq [appointment, appointment2]
    end

    specify "hoemowner has the correct appointments" do
      appointment2.homeowner.should eq homeowner
    end

    specify "contractor has the correct appointments" do
      appointment2.contractor.should eq contractor
    end

    it "doesn't create a new contractor association for homeowner" do
      homeowner.contractors.should eq [contractor]
    end

    it "doesn't create a new homeowner association for contractor" do
      contractor.homeowners.should eq [homeowner]
    end
  end

  describe "has a" do
    specify "address" do
      appointment.address.city.should eq address.city
      appointment.address.state.should eq address.state
      appointment.address.zipcode.should eq address.zipcode
    end
  end

  describe "properly manages time" do
    it "when overlapping with another appointment"
    it "calculates ending time"
  end

end
