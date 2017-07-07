class User < ApplicationRecord

    has_many :hikes
    has_many :completions
    has_many :hikes :through => :completions
    has_many :comments

    has_secure_password
    validates :email, presence: true, uniqueness: true, length: {minimum: 5}
    validates :name, presence: true
end
