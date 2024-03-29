FactoryGirl.define do
  factory :homeowner do
    sequence :email do |n|
      "homeowner#{n}@email.com"
    end

    password "iamsecret"
    first_name "RspecHomeowner"
    last_name "RspecHomeowner"
  end

  factory :guest_homeowner, class: "Homeowner" do
    guest true
  end
end
