class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.integer :pledge_amount, null: false
      t.string :description, null: false
      t.date :estimated_delivery, null: false
      t.string :shipping_details, null:false
      t.boolean :limited_availability, default: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
