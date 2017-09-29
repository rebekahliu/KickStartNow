class AddChangeRewards < ActiveRecord::Migration[5.1]
  def change
    add_index :rewards, [:project_id, :title], unique: true
  end
end
