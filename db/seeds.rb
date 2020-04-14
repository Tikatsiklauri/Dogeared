# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

testUser=User.create({
    name: 'test',
    email: 'test',
    password: 'password'
})

demoUser=User.create({
    name: 'demouser',
    email: 'demouser',
    password: 'testtest'
})

Book.create({
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    genre: "Novel",
    date: "November 22nd 2005",
    image_url: "929.jpg",
    overview: "A literary sensation and runaway bestseller, this brilliant debut
     novel presents with seamless authenticity and exquisite lyricism the true 
     confessions of one of Japan's most celebrated geisha.
        In Memoirs of a Geisha, we enter a world where appearances are paramount; 
    where a girl's virginity is auctioned to the highest bidder; where women 
    are trained to beguile the most powerful men; and where love is scorned as 
    illusion. It is a unique and triumphant work of fiction - at once romantic,
    erotic, suspenseful - and completely unforgettable."
})

