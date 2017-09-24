class Project < ApplicationRecord
  validates :title, uniqueness: true
  validates :title, :description, :about, :user_id, :goal_amount, :end_date, :category_id, presence: true

  belongs_to :user
  has_many :rewards, dependent: :destroy
end
