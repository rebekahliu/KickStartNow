class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :about, null: false
      t.integer :user_id, null: false
      t.integer :goal_amount, null: false
      t.date :end_date, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :projects, :title
    add_index :projects, :user_id
    add_index :projects, :category_id
  end
end
