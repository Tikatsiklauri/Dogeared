
json.partial! "api/users/user", user: @user

json.shelves do
    @user.shelves.each do |shelf|
        json.extract! shelf, :name 
    end
end