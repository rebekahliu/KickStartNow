class RemoveShippingInformation < ActiveRecord::Migration[5.1]
  def change
    remove_column :rewards, :shipping_details
  end
end
