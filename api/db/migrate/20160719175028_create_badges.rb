class CreateBadges < ActiveRecord::Migration[5.0]
  def change
    create_table :badges do |t|
      t.integer :student_id
      t.string :description
      t.integer :votes

      t.timestamps
    end
  end
end
