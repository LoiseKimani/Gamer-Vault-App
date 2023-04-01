# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed data for games table

puts "🛫 Seeding..."

Game.create(title: "The Legend of Zelda: Breath of the Wild", genre: "Action-adventure", release_date: "2017-03-03", description: "An action-adventure game set in an open world environment.")
Game.create(title: "Red Dead Redemption 2", genre: "Action-adventure", release_date: "2018-10-26", description: "A Western-themed action-adventure game set in an open world environment.")
Game.create(title: "Animal Crossing: New Horizons", genre: "Life simulation", release_date: "2020-03-20", description: "A life simulation game in which the player lives on a deserted island and works to build a community of anthropomorphic animals.")
Game.create(title: "God of War", genre: "Action-adventure", release_date: "2018-04-20", description: "An action-adventure game that follows Kratos, a former Greek god who sets out on a journey with his young son Atreus, to spread his wife's ashes on the highest peak of the nine realms.")
Game.create(title: "Subnautica", genre: "Survival", release_date: "2018-01-23", description: "A survival game set on an alien planet, where players explore and gather resources to survive while uncovering the planet's secrets and dealing with its dangerous creatures.")
Game.create(title: "Death Stranding", genre: "Action", release_date: "2019-11-08", description: "An action game set in a post-apocalyptic America, where players control Sam Porter Bridges, a courier tasked with delivering cargo while avoiding ghostly creatures and connecting survivors together.")
Game.create(title: "Stardew Valley", genre: "Simulation", release_date: "2016-02-26", description: "A farming simulation game, where players inherit a dilapidated farm and must cultivate it back to life while also building relationships with the townsfolk and participating in community events.")


# Seed data for users table

User.create(username: "coolcat123", email: "coolcat123@example.com", password: "mypassword")
User.create(username: "happylion", email: "happylion22@gmail.com", password: "12345abc")
User.create(username: "greenapple", email: "greenapple90@yahoo.com", password: "letmein")
User.create(username: "jollyjoker", email: "jollyjoker88@hotmail.com", password: "p@ssw0rd")
User.create(username: "silverfox", email: "silverfox44@outlook.com", password: "qwerty123")
User.create(username: "sleepysloth", email: "sleepysloth99@gmail.com", password: "thepassword")
User.create(username: "musiclover", email: "musiclover777@gmail.com", password: "ilovemusic")

# Seed data for game_reviews table

GameReview.create(image: "zelda_breath_of_the_wild.jpg", name: "Assassin's Creed Valhalla", rating: 9, comment: "An incredible game that sets a new standard for open-world exploration.")
GameReview.create(image: "red_dead_redemption_2.jpg", name: "Ghost of Tsushima", rating: 8, comment: "A beautifully crafted game with an immersive story and memorable characters.")
GameReview.create(image: "animal_crossing_new_horizons.jpg", name: "Animal Crossing: New Horizons", rating: 8, comment: "A relaxing game that allows players to create their own island paradise and escape from reality.")
GameReview.create(image: "god_of_war.jpg", name: "God of War", rating: 9, comment: "A stunning and emotional journey that reimagines the franchise with a new setting, characters, and gameplay mechanics. The relationship between Kratos and his son Atreus is heartwarming, and the game's combat system is top-notch. Highly recommended for fans of action-adventure games.")
GameReview.create(image: "subnautica.jpg", name: "Subnautica", rating: 9, comment: "A thrilling and immersive survival game that takes place in a beautifully crafted underwater world filled with danger and mystery. The game's crafting system and exploration mechanics make for an engaging and rewarding experience.")
GameReview.create(image: "death_stranding.jpg", name: "Death Stranding", rating: 4, comment: "A slow-paced and tedious game that fails to deliver on its promises. The story is convoluted and the gameplay mechanics are often frustrating. Overall, a disappointing experience.")
GameReview.create(image: "stardew_valley.jpg", name: "Stardew Valley", rating: 3, comment: "A tedious and boring game with repetitive tasks that quickly become a chore. The graphics are outdated and the gameplay is lackluster. Not worth the time or money.")


puts "🛬 Done seeding!"