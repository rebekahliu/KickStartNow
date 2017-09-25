class Reward < ApplicationRecord
  validates :title, :description, :pledge_amount, :estimated_delivery, :project_id, presence: true

  belongs_to :project
  has_many :backings
  
  has_many :backing_users,
  through: :backings,
  source: :user
end
