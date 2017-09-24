class RemoveColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :rewards, :limited_availability
  end
end
