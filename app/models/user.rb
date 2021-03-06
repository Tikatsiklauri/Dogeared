class User < ApplicationRecord 
    validates :email, :session_token, presence: {message: 'Sorry, you must enter an email address to sign up for Goodreads.'}, uniqueness: true
    validates :password_digest, presence: true
    validates :name, presence: {message:'Sorry, you must enter a name to sign up for Goodreads.'}
    validates :password, length: {minimum: 6, allow_nil: true, message:'Sorry, you must enter a password of six or more characters'}

    
    after_initialize :ensure_session_token
    
    attr_reader :password

    has_many :shelves,
    foreign_key: :user_id,
    class_name: :Shelf

    has_many :books,
    through: :shelves,
    source: :books

   has_many :reviews

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


end
