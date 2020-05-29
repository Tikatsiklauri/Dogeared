# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all

testUser=User.create({
    name: 'test',
    email: 't@est',
    password: 'password'
})

demoUser=User.create({
    name: 'demouser',
    email: 'demo@user',
    password: 'testtest'
})

book1 = Book.create!({
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


book2 = Book.create!({
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Fantasy Novel",
    date: "August 29th 2006",
    image_url: "4214.jpg",
    overview: "Life of Pi is a fantasy adventure novel by Yann Martel published 
    in 2001. The protagonist, Piscine Molitor Pi Patel, a Tamil boy from Pondicherry, 
    explores issues of spirituality and practicality from an early age. He survives 
    227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a
    Bengal tiger named Richard Parker."
})


book3 = Book.create!({
    title: "Cloud Atlas",
    author: "David Mitchell",
    genre: "Fiction",
    date: "August 17th 2004",
    image_url: "49628._SX318_.jpg",
    overview: "A postmodern visionary who is also a master of styles of genres,
     David Mitchell combines flat-out adventure, a Nabokovian lore of puzzles, 
     a keen eye for character, and a taste for mind-bending philosophical and 
     scientific speculation in the tradition of Umberto Eco, Haruki Murakami, and 
     Philip K. Dick. The result is brilliantly original fiction as profund as it
    is playful. Now in his new novel, David Mitchell explores with daring artistry 
    fundamental questions of reality and identity."
})

book4 = Book.create!({
    title: "The Curious Incident of the Dog in the Night-Time",
    author: "Mark Haddon",
    genre: "Mystery Novel",
    date: "May 18th 2004",
    image_url: "1618._SY475_.jpg",
    overview: "Christopher John Francis Boone knows all the countries of the world 
    and their capitals and every prime number up to 7,057. He relates well to animals
     but has no understanding of human emotions. He cannot stand to be touched. 
     And he detests the color yellow.
        Although gifted with a superbly logical brain, for fifteen-year-old Christopher
    everyday interactions and admonishments have little meaning. He lives on patterns, 
    rules, and a diagram kept in his pocket. Then one day, a neighbor's dog, Wellington, 
    is killed and his carefully constructive universe is threatened. Christopher sets out
     o solve the murder in the style of his favourite (logical) detective, Sherlock Holmes. 
    What follows makes for a novel that is funny, poignant and fascinating in its portrayal
    of a person whose curse and blessing are a mind that perceives the world entirely literally."
})

book5 = Book.create!({
    title: "A Suitable Boy",
    author: "Vikram Seth",
    genre: "Novel",
    date: "October 4th 2005",
    image_url: "50365.jpg",
    overview: "Vikram Seth's novel is, at its core, a love story: Lata and her 
    mother, Mrs. Rupa Mehra, are both trying to find—through love or through exacting
     maternal appraisal—a suitable boy for Lata to marry. Set in the early 1950s, 
     in an India newly independent and struggling through a time of crisis, A Suitable 
     Boy takes us into the richly imagined world of four large extended families and 
     spins a compulsively readable tale of their lives and loves. A sweeping panoramic 
     portrait of a complex, multiethnic society in flux, A Suitable Boy remains the 
     story of ordinary people caught up in a web of love and ambition, humor and sadness,
     prejudice and reconciliation, the most delicate social etiquette and the 
     most appalling violence."
})

book6 = Book.create!({
    title: "The First Days",
    author: "Rhiannon Frater",
    genre: "Firction",
    date: "July 5th 2011",
    image_url: "9648068.jpg",
    overview: "Katie is driving to work one beautiful day when a dead man jumps 
    into her car and tries to eat her.  That same morning, Jenni opens a bedroom 
    door to find her husband devouring their toddler son. 
        Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing 
    the suddenly zombie-filled streets of the Texas city in which they live. Before
    the sun has set, they have become more than just friends and allies—they are 
    bonded as tightly as any two people who have been to war together."
})

book7 = Book.create!({
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror Novel",
    date: "July 1st 1980",
    image_url: "11588.jpg",
    overview: "Jack Torrance's new job at the Overlook Hotel is the perfect chance 
    for a fresh start. As the off-season caretaker at the atmospheric old hotel,
    he'll have plenty of time to spend reconnecting with his family and working
    on his writing. But as the harsh winter weather sets in, the idyllic location 
    feels ever more remote...and more sinister. And the only one to notice the 
    strange and terrible forces gathering around the Overlook is Danny Torrance, 
    a uniquely gifted five-year-old."
})


book8 = Book.create!({
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson, Reg Keeland",
    genre: "Horror Novel",
    date: "September 16th 2008",
    image_url: "2429135.jpg",
    overview: "Harriet Vanger, a scion of one of Sweden’s wealthiest families 
    disappeared over forty years ago. All these years later, her aged uncle continues 
    to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently 
    trapped by a libel conviction, to investigate. He is aided by the pierced and
    tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable 
    iniquity and astonishing corruption."
})

book9 = Book.create!({
    title: "Anna Karenina",
    author: "Leo Tolstoy, Aylmer Maude (Translator), Louise Maude (Translator), George Gibian (Preface)",
    genre: "Novel",
    date: "October 16th 2012",
    image_url: "15823480._SX318_.jpg",
    overview: "Acclaimed by many as the world's greatest novel, Anna Karenina provides a vast panorama of 
    contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative 
    insight to create some of the most memorable characters in all of literature. Anna is a sophisticated 
    woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her 
    passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing 
    the author's own views and convictions."
})

 book10 = Book.create!({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Novel",
    date: "May 23rd 2006",
    image_url: "2657.jpg",
    overview: "The unforgettable novel of a childhood in a sleepy Southern town 
    and the crisis of conscience that rocked it, To Kill A Mockingbird became both 
    an instant bestseller and a critical success when it was first published in 1960.
    It went on to win the Pulitzer Prize in 1961 and was later made into an Academy
    Award-winning film, also a classic."
})
