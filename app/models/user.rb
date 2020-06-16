class User < ApplicationRecord 
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :name, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    after_create :build_shelves
    attr_reader :password
    attr_accessor :all_shelves, :read_shelf, :reading_shelf, :want_read_shelf

    has_many :shelves,
    foreign_key: :user_id,
    class_name: :Shelf,
    dependent: :destroy

    has_many :shelvings,
    through: :shelves,
    source: :shelvings

    has_many :books,
    through: :shelves,
    source: :book

    def default_shelves
        self.shelves.limit(4)
    end

     def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

     def is_password?(password)
        bcrypt = BCrypt::Password.new(self.password_digest)
        bcrypt.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    def build_shelves
            @all_shelves = Shelf.create!({user_id: self.id, name: "All"})
            @read_shelf = Shelf.create!({user_id: self.id, name: "Read"})
            @reading_shelf = Shelf.create!({user_id: self.id, name: "Currently Reading"})
            @want_read_shelf = Shelf.create!({user_id: self.id, name: "Want to Read"})
    end
end
