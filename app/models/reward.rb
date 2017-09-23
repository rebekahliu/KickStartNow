class Reward < ApplicationRecord
  validates :title, :description, :pledge_amount, :estimated_delivery, :shipping_details, :limited_availability, presence: true

  belongs_to :project
end
