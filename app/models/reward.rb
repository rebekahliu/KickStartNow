class Reward < ApplicationRecord
  validates :title, :description, :pledge_amount, :estimated_delivery, :project_id, presence: true

  belongs_to :project
end
