class Comment < ApplicationRecord
    validates :text, presence: true
    belongs_to :post
    belongs_to :commentor, class_name: "User"
end
