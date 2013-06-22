class RecreateAlerts < ActiveRecord::Migration
  def change
    create_table :alerts do |t|
      t.string :title
      t.text :content
      t.integer :alertable_id
      t.string :alertable_type
      t.string :notifice_type

      t.timestamps
    end
  end
end