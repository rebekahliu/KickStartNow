class Backing < ApplicationRecord
  validates :user_id, :project_id, :backing_amount, presence: true

  belongs_to :user
  belongs_to :project
  belongs_to :reward, optional: true
end
