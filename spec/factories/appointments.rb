FactoryGirl.define do
  factory :appointment do |f|
    date Date.new(2013, 12, 3)
    time Time.new(12, 1, 3)

    #appointments { [FactoryGirl.create(:appointment)] }
    address
    job
  end
end