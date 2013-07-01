# == Schema Information
#
# Table name: project_fields
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  field_type      :string(255)
#  required        :boolean
#  project_type_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  field_data      :text
#  default         :string(255)
#  attr_name       :string(255)
#  label           :string(255)
#  position        :string(255)
#

### ----------------------------------------------------------------------------------------------------------------
# +ProjectField+ ActiveModel to Encapsulate the data revolving around Dynamic Project Forms
#
#  Default ordering for dynamic fields:
#
#  == Required Attributes ==
#
#   - attr_name (Symbol):
#       (ex - :wall_1, :wall_2)
#   - field_type (Symbol):
#       (ex - :text_field, :check_field)
#
#
#  == Optional Attributes ==
#
#   - field_data: (Array/Hash)
#       (ex - [:walls, :ceiling, :trim, :doors, :windows])
#
#   - label: (String)
#       (ex - "Wall 1 (Square Feet)")
#
#   - position: (enum: [:left, :right])
#       (ex - :left)
#
#   - size: (enum: [:tiny, :small, :normal, :large])
#       (ex - :left)
#
#   - default: (String/Boolean)
#       (ex - "Wood", true)
#
#   - required: (True/False)
#       True if this field is required
#
#   - toggleable: True/False
#       True if this field can be enabled/disabled by a check box.
class ProjectField < ActiveRecord::Base

  attr_protected

  belongs_to :project_type

  validates_presence_of :attr_name, :field_type

  serialize :field_data, Array

  def to_s
    "#{attr_name}: #{field_type}"
  end
end
