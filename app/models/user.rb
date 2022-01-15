class User < ApplicationRecord
    has_secure_password

    validates :username, :password, :password_confirmation, presence: true
    validates_uniqueness_of :username

    has_many :authored_posts, foreign_key: "author_id", class_name: "Post"
     
    # has_many :posts, :through => :comments
    # , foreign_key: "commentor_id", class_name: "Comment"

    has_many :comments, foreign_key: "commentor_id", class_name: "Comment"
end
