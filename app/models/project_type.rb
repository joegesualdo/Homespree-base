# == Schema Information
#
# Table name: project_types
#
#  id                  :integer          not null, primary key
#  name                :string(255)
#  project_category_id :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class ProjectType < ActiveRecord::Base
  attr_accessible :category_id, :name

  validates_presence_of :name

  belongs_to :service_type
  has_many :projects


end
