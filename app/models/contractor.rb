# == Schema Information
#
# Table name: contractors
#
#  id                     :integer          not null, primary key
#  first_name             :string(255)
#  description            :text
#  specialties            :text
#  website                :string(255)
#  facebook               :string(255)
#  twitter                :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  email                  :string(255)      not null
#  last_name              :string(255)
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  company_title          :string(255)
#  mobile_number          :string(255)
#  office_number          :string(255)
#  license                :string(255)
#  insurance_limit        :decimal(5, 2)
#  bonding_limit          :decimal(5, 2)
#  photo_filename         :string(255)
#  slogan                 :text
#  years_experience       :decimal(, )
#  failed_attempts        :integer          default(0)
#  unlock_token           :string(255)
#  locked_at              :datetime
#  authentication_token   :string(255)
#  edited                 :boolean          default(FALSE)
#  hourly_rate            :decimal(, )
#  slug                   :string(255)
#  portrait_url           :string(255)
#  logo_url               :string(255)
#  notification_settings  :text
#

class Contractor < ActiveRecord::Base

  # Gem Class Methods:  ----------------------------------------------------------------------------------------------
  include ActionView::Helpers::NumberHelper

  # Include default devise modules. Others available are:  :token_authenticatable, :confirmable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :lockable, :recoverable, :rememberable, :trackable, :validatable

  extend FriendlyId
  friendly_id :company_title, use: :slugged
  acts_as_messageable

  mount_uploader :logo_url, LogoUploader
  mount_uploader :portrait_url, PortraitUploader

  @@portrait_default = "/assets/contractor_profiles/portrait_default.png"

  # Accessors:  -------------------------------------------------------------------------------------------------------
  attr_protected

  # Associations:  ----------------------------------------------------------------------------------------------------
  has_one :address, as: :addressable, dependent: :destroy
  has_one :profile_picture, as: :photographable, class_name: 'Photo'
  has_many :alerts, as: :alertable

  has_many :appointments
  has_many :homeowners, through: :appointments, uniq: true
  has_many :jobs, through: :appointments

  has_many :specialties, dependent: :destroy
  has_many :photos, as: :photographable
  has_many :job_photos, as: :photographable, class_name: "Photo", through: :jobs
  has_many :badges


  # Nested Attributes:  -----------------------------------------------------------------------------------------------
  accepts_nested_attributes_for :address, :photos, :appointments, :specialties, :profile_picture


  # Validations:  -----------------------------------------------------------------------------------------------------
  validates_format_of :first_name, :last_name, with: /\A\w+ ?\w*\z/, allow_blank: true, message: "should only contain letters"
  validates_length_of :first_name, :last_name, minimum: 2, maximum: 20, allow_blank: true, message: "must be a reasonable length"
  validates_format_of :email, with: RegexDefinitions::email_regex, message: "is invalid"
  validates_uniqueness_of :email
  validates_format_of :mobile_number, :office_number, with: /\A\d{10}\Z/, allow_blank: true, message: "must be valid"
  validates_presence_of :company_title
  validates_numericality_of :years_experience, allow_blank: true


  # Callbacks:  -------------------------------------------------------------------------------------------------------
  before_validation :sanitize_phone_numbers
  before_save :titleize_name
  before_save lambda { |contractor| contractor.email.try(:downcase!) }
  before_save lambda { |contractor| contractor.license.try(:upcase!) }
  after_create :set_image_defaults
  before_create :add_badges

  # Scopes:  ----------------------------------------------------------------------------------------------------------
  default_scope order("created_at desc")
  scope :recent_signups, lambda { limit(100) }

  # Delegations:  -----------------------------------------------------------------------------------------------------
  delegate :line1, :line2, :city, :state, :zipcode, :latitude, :longitude, :single_address, to: :address, allow_nil: true

  # Custom Methods:  --------------------------------------------------------------------------------------------------
  def incomplete_sections
    sections = []

    sections << :first_name if first_name.blank?
    sections << :last_name if last_name.blank?
    sections << :company_title if company_title.blank?
    sections << :specialties if specialties.blank?
    sections << :mobile_number if mobile_number.blank?
    sections << :office_number if office_number.blank?
    sections << :slogan if slogan.blank?
    sections << :description if description.blank?
    sections << :address if address.blank?

    return sections
  end

  def mailboxer_email(object)
    self.email
  end

  def name
    if first_name? && last_name?
      "#{first_name.capitalize} #{last_name.capitalize}"
    elsif first_name?
      first_name
    else
      company_title
    end
  end

  def default_portrait?
    portrait_url.to_s == @@portrait_default
  end

  def default_logo?
    logo_url.to_s == @@logo_default
  end

  protected

  def sanitize_phone_numbers
    self.mobile_number.try(:gsub!, /\D/, '')
    self.office_number.try(:gsub!, /\D/, '')
  end

  private

  def set_image_defaults
    self.photos = [Photo.create(image_url: "/assets/contractor_profiles/portfolio_images/default.png")]
  end

  def add_badges
    badge = Badge.new
    badge.image_url = 'early_adopter'
    badge.save
    self.badges << badge
  end

  def titleize_name
    self.first_name = first_name.try(:titleize)
  end

end
