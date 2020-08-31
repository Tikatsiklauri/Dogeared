# DogEared
DogEared is a clone of Goodreads, social cataloging website that allows users to track their readings with organized shelving. Users are able to find, shelf, comment, and rate the books they dog-ear and love.

## [Live Site](https://dogeared-app.herokuapp.com)

![Splash page demo](app/assets/images/new-dogeared-gif.gif)

## Technologies
* Ruby on Rails — back-end
* PostgreSQL — database
* React — front-end 
* JavaScript — front-end
* Redux — state management
* AJAX — asynchronous front-end to back-end communication 
* Heroku — domain hosting

## Key Features
* Manually implemented User Authorization

```Ruby
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
```

* Smooth error handling experience for users with customized messages

![error demo](app/assets/images/error_gif.gif)

* Ability to add customized bookshelves and put books on those new shelves

![add shelf gif](app/assets/images/addShelf.gif)

* Placing books on specific shelves and removing them
* Writing reviews on books and rating them




