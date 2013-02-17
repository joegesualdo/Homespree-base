class Mailinglist < ActiveRecord::Base
  attr_accessible :contractor, :email, :user_type, :notes
  attr_accessor :user_type

  validates_presence_of :user_type, :email, allow_blank: false
  validates :email, format: { with: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i }


  before_save :check_user_type
  before_validation :downcase_email

  private

  def check_user_type
    self.contractor = self.user_type.downcase == "contractor"
    true
  end

  def downcase_email
    self.email = email.downcase if self.email.present?
  end

end
