class Post < ApplicationRecord
    validates :text, presence: true
    belongs_to :author, class_name: "User"
    has_many :comments
end
