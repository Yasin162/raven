class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :text
      t.string :image
      t.integer :author_id

      t.timestamps
    end
  end
end
