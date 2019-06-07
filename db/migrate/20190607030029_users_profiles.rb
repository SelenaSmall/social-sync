class UsersProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :users_profiles, id: false do |t|
      t.integer 'user_id'
      t.integer 'profile_id'
      t.string 'username', null: false
      t.string 'password', null: false
    end
  end
end
