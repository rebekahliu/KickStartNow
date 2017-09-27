# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: 'demo_email@gmail.com', password: 'demopassword', name: 'demo')
user2 = User.create(username: 'liu.rebekah@gmail.com', password: 'password', name: 'Rebekah Liu')
user3 = User.create(username: 'john.smith@gmail.com', password: 'password', name: 'John Smith')
user4 = User.create(username: 'jack.jacob@gmail.com', password: 'password', name: 'Jack Jacob')
user5 = User.create(username: 'sarah.matthews@gmail.com', password: 'password', name: 'Sarah Matthews')

category1 = Category.create(
  name: 'Art'
)

category2 = Category.create(
  name: 'Comic'
)

category3 = Category.create(
  name: 'Craft'
)

category4 = Category.create(
  name: 'Food'
)

category5 = Category.create(
  name: 'Fashion'
)

category6 = Category.create(
  name: 'Film & Video'
)

category7 = Category.create(
  name: 'Game'
)

category8 = Category.create(
  name: 'Photography'
)

category9 = Category.create(
  name: 'Technology'
)

project1 = Project.create(
  title: 'PORCELAIN | Unique tableware for your home',
  description: 'One of a kind porcelain plates to spruce up your table setting',
  about: '<p>These porcelain plates are each hand made in Beijing by potters who have spent their entire lives studying the art of pottery. This technique of hand painting plates is no longer in practice anywhere else in the world so this is your own chance to obtain it for your own collection.</p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br> <p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user1.id,
  goal_amount: 7000,
  end_date: "1/1/2018",
  category_id: category3.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441399/hot-2574466_1920_jfbyb6.jpg'
)

project2 = Project.create(
  title: "wicker: that perfect summer bag you've been waiting for",
  description: 'These handwoven and hand painted wicker baskets are the perfect summer accessory',
  about: '<p>wicker is a Los Angeles based start up that wants to upgrade the every day bag. It is a casual yet work appropriate bag that will easily take you from day to night. The bag is based on the casual California style and will give your outfit that touch of texture and pattern. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user2.id,
  goal_amount: 10000,
  end_date: "6/1/2018",
  category_id: category5.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441442/spring-2298279_1920_nc4qta.jpg'
)

project3 = Project.create(
  title: 'HOTChocolate: A NEW kind of hot chocolate!!',
  description: 'HOTChocolate, a decadent smooth drink that will impress all your friends',
  about: '<p>HOT Chocolate started out as a small batch hot chocolate but after winning the Annual Hot Chocolate competition we decided it was time that the rest of world got to experience this life changing drink. Support us now to be the first to get your hands on this award winning hot chocolate before it reaches mass production.  </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user3.id,
  goal_amount: 10000,
  end_date: "8/10/2018",
  category_id: category4.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441398/hot-chocolate-1782623_1920_l6ta6d.jpg'
)

project4 = Project.create(
  title: 'zenstones: Learn how to meditate through the art of rock balancing',
  description: 'Come check us out at the Lands End rock labrinth for a life changing meditation session and rock balancing',
  about: '<p>If you have never tried meditation through rock stacking now is your chance! This is a life changing experience that will affect the rest of your life. Rock balancing is a proven calming technique that the ancient Tibetan monks used. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user4.id,
  goal_amount: 1000,
  end_date: "3/1/2018",
  category_id: category7.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441397/makeup-brush-1768790_1920_e1nncs.jpg'
)

project5 = Project.create(
  title: 'MEMECOSMETICS: Cruelty free vegan makeup',
  description: 'Try MEMECOSMETICS for high quality 100% cruelty free and vegan makeup',
  about: '<p>Our premium makeup brushes are high quality and will last you a lifetime. These vegan brushes are sleek and great for travel. Your makeup will glide on smoothly, no clumps or excess.  </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user5.id,
  goal_amount: 9000,
  end_date: "3/1/2018",
  category_id: category3.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441441/zen-2040340_1920_we4p2t.jpg'
)

project6 = Project.create(
  title: 'The Muppets Show: Once upon a time',
  description: 'Your favorite childhood show, upgraded for IMAX',
  about: '<p>In this remake of your childhood classic, the Muppets cast find themselves mysteriously transported to the 1800s on a mission to save the world. This epic saga follows the characters through harrowing adventures to complete this quest and find their way back to the present.  </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user1.id,
  goal_amount: 10000,
  end_date: "1/1/2018",
  category_id: category6.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441400/not-hear-2687975_1920_jzz6iw.jpg'
)

project7 = Project.create(
  title: 'foodart: beautiful high quality prints of your favorite foods',
  description: 'foodart will create beautiful art for your home',
  about: '<p>There are few things better to look at than your favorite foods. foodart was born out of a desire to proudly display your favorite foods as beautiful high quality prints to hang in your home. This unique take on wall art not only brings a personal touch to your space but will make you stand out. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user2.id,
  goal_amount: 10000,
  end_date: "1/1/2018",
  category_id: category1.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_scale,h_576,w_1024/v1506441398/noodles-2733636_1920_uyqjzn.jpg'
)

project8 = Project.create(
  title: 'Three Ghastly Ghosts: A story about the three best ghost friends',
  description: 'An endearing story about three ghost friends and their adventures',
  about: '<p>John Ann and Laura are three ghosts who go on crazy adventures trying to scare unsuspecting children with their antics. Follow along as they travel around the world encountering all kinds of trouble and proving that ghastly ghosts are maybe not as scary as we thought. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user3.id,
  goal_amount: 10000,
  end_date: "1/1/2018",
  category_id: category2.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_scale,h_576,w_1024/v1506458385/halloween-1746354_1920_rwa2fr.jpg'
)

project9 = Project.create(
  title: 'TabletNova: Revolutionizing the tablet industry',
  description: 'Ultra light and super fast, TabletNova is the next tablet',
  about: '<p>TabletNova is a full step ahead of all tablets in production with custom ultra light materials and innovative 3D pictures. The TabletNova is the result of a joining of the best designers and top engineers. It will blow away your expections of what you can do with a tablet. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user4.id,
  goal_amount: 10000,
  end_date: "1/1/2018",
  category_id: category9.id,
  image_url: 'https://res.cloudinary.com/rebekahliu/image/upload/c_scale,h_576,w_1024/v1506441410/businessman-2606509_1920_dty04g.jpg'
)

project10 = Project.create(
  title: 'Spartan 300x: a throwback camera with high tech specs',
  description: 'The Spartan 300x is a vintage throwback without compromising on quality',
  about: '<p>Spartan 300x is the answer to so many hipster photographer dreams. The old fashioned vintage look of the Spartan 300x will match perfectly with your style without compromising on the beautiful photo quality. This compact mirrorless camera is easy for everyday shooting while the high quality specs will blow your old DSLR out of the water. It will blow away your expections of what you can do with a tablet. </p> <br> <p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <br><br/> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever. It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-andtwentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.</p> <br><p>Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p>',
  user_id: user5.id,
  goal_amount: 10000,
  end_date: "1/1/2018",
  category_id: category8.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506441398/magnifying-glass-2598507_1920_ed95vl.jpg'
)

reward1_1 = Reward.create(
  title: 'Dinner plates- Pack of 2',
  description: 'Pack of 2 of our one of a kind porcelain plates, completely original.',
  pledge_amount: 30,
  estimated_delivery: "12/12/2018",
  project_id: project1.id
)

reward1_2 = Reward.create(
  title: 'Dinner plates- Pack of 4',
  description: 'Pack of 4 of our one of a kind porcelain plates, completely original.',
  pledge_amount: 50,
  estimated_delivery: "12/12/2018",
  project_id: project1.id
)

reward1_3 = Reward.create(
  title: 'Dinner plates- Pack of 8',
  description: 'Pack of 8 of our one of a kind porcelain plates, completely original.',
  pledge_amount: 100,
  estimated_delivery: "12/12/2018",
  project_id: project1.id
)

reward2_1 = Reward.create(
  title: 'small wicker totebag',
  description: 'Pledge our project to receive a small wicker totebag',
  pledge_amount: 50,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward2_2 = Reward.create(
  title: 'large wicker totebag',
  description: 'Pledge our project to receive a medium wicker totebag',
  pledge_amount: 100,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward2_3 = Reward.create(
  title: 'choice of 2 wicker bags',
  description: 'Pledge our project to receive your choice of 2 wicker totebags',
  pledge_amount: 200,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward3_1 = Reward.create(
  title: 'One pack of hot chocolate',
  description: 'One pack of our delicious ready to make hot chocolate mix.',
  pledge_amount: 30,
  estimated_delivery: "30/11/2018",
  project_id: project3.id
)

reward3_2 = Reward.create(
  title: 'Two packs of hot chocolate',
  description: 'Two packs of our delicious ready to make hot chocolate mix.',
  pledge_amount: 50,
  estimated_delivery: "30/11/2018",
  project_id: project3.id
)

reward3_3 = Reward.create(
  title: 'Company pack of hot chocolate',
  description: 'A pack of our delicious ready to make hot chocolate mix enough for an office space of 50 people.',
  pledge_amount: 300,
  estimated_delivery: "30/11/2018",
  project_id: project3.id
)

reward4_1 = Reward.create(
  title: 'pass for 1 class',
  description: 'Pledge our project to experience one rock balancing session.',
  pledge_amount: 100,
  estimated_delivery: "30/11/2018",
  project_id: project4.id
)

reward4_2 = Reward.create(
  title: 'pass for 2 classes',
  description: 'Pledge our project to experience two rock balancing sessions.',
  pledge_amount: 150,
  estimated_delivery: "30/11/2018",
  project_id: project4.id
)

reward4_3 = Reward.create(
  title: 'pass for 3 classes',
  description: 'Pledge our project to experience three rock balancing sessions.',
  pledge_amount: 200,
  estimated_delivery: "30/11/2018",
  project_id: project4.id
)

reward5_1 = Reward.create(
  title: 'choice of 2 MEMECOSMETICS makeup brushes',
  description: 'Receive your choice of 2 MEMECOSMETICS makeup brushes',
  pledge_amount: 40,
  estimated_delivery: "30/11/2018",
  project_id: project5.id
)

reward5_2 = Reward.create(
  title: 'choice of 4 MEMECOSMETICS makeup brushes',
  description: 'Receive your choice of 4 MEMECOSMETICS makeup brushes',
  pledge_amount: 80,
  estimated_delivery: "30/11/2018",
  project_id: project5.id
)

reward5_3 = Reward.create(
  title: 'full set of MEMECOSMETICS makeup brushes',
  description: 'Receive a full set of MEMECOSMETICS makeup brushes',
  pledge_amount: 150,
  estimated_delivery: "30/11/2018",
  project_id: project5.id
)

reward6_1 = Reward.create(
  title: '1 ticket to The Muppets Show screening',
  description: 'Receive 1 ticket to The Muppets Show screening',
  pledge_amount: 50,
  estimated_delivery: "30/11/2018",
  project_id: project6.id
)

reward6_2 = Reward.create(
  title: '2 tickets to The Muppets Show screening',
  description: 'Receive 2 ticket to The Muppets Show screening',
  pledge_amount: 100,
  estimated_delivery: "30/11/2018",
  project_id: project6.id
)

reward6_3 = Reward.create(
  title: '4 tickets to The Muppets Show screening',
  description: 'Receive 4 ticket to The Muppets Show screening',
  pledge_amount: 200,
  estimated_delivery: "30/11/2018",
  project_id: project6.id
)

reward7_1 = Reward.create(
  title: 'One high quality foodart print',
  description: 'Receive one high quality foodart print',
  pledge_amount: 200,
  estimated_delivery: "30/11/2018",
  project_id: project7.id
)

reward7_2 = Reward.create(
  title: '2 high quality foodart print',
  description: 'Receive 2 high quality foodart prints',
  pledge_amount: 300,
  estimated_delivery: "30/11/2018",
  project_id: project7.id
)

reward7_3 = Reward.create(
  title: '3 high quality foodart print',
  description: 'Receive 3 high quality foodart prints',
  pledge_amount: 400,
  estimated_delivery: "30/11/2018",
  project_id: project7.id
)

reward8_1 = Reward.create(
  title: 'First edition print of any issue',
  description: 'Receive a first edition print of any issue',
  pledge_amount: 20,
  estimated_delivery: "30/11/2018",
  project_id: project8.id
)

reward8_2 = Reward.create(
  title: 'First edition print of any 2 issues',
  description: 'Receive a first edition print of any 2 issues',
  pledge_amount: 40,
  estimated_delivery: "30/11/2018",
  project_id: project8.id
)

reward8_3 = Reward.create(
  title: 'First edition print of entire series',
  description: 'Receive a first edition print of entire series',
  pledge_amount: 200,
  estimated_delivery: "30/11/2018",
  project_id: project8.id
)

reward9_1 = Reward.create(
  title: 'One TabletNova tablet',
  description: 'Plegde our projct to receive one TabletNova tablet',
  pledge_amount: 200,
  estimated_delivery: "30/11/2018",
  project_id: project9.id
)

reward9_2 = Reward.create(
  title: 'Two TabletNova tablet',
  description: 'Plegde our projct to receive two TabletNova tablet',
  pledge_amount: 400,
  estimated_delivery: "30/11/2018",
  project_id: project9.id
)

reward9_3 = Reward.create(
  title: 'Four TabletNova tablet',
  description: 'Plegde our projct to receive four TabletNova tablet',
  pledge_amount: 700,
  estimated_delivery: "30/11/2018",
  project_id: project9.id
)

reward10_1 = Reward.create(
  title: 'One Spartan 300x camera',
  description: 'Plegde our projct to receive 1 Spartan 300x camera',
  pledge_amount: 150,
  estimated_delivery: "30/11/2018",
  project_id: project10.id
)

reward10_2 = Reward.create(
  title: 'Two Spartan 300x camera',
  description: 'Plegde our projct to receive 2 Spartan 300x camera',
  pledge_amount: 300,
  estimated_delivery: "30/11/2018",
  project_id: project10.id
)

reward10_3 = Reward.create(
  title: 'Four Spartan 300x camera',
  description: 'Plegde our projct to receive 4 Spartan 300x camera',
  pledge_amount: 500,
  estimated_delivery: "30/11/2018",
  project_id: project10.id
)

backing1_1 = Backing.create(
  project_id: project1.id,
  user_id: user2.id,
  reward_id: reward1_3.id,
  backing_amount: reward1_3.pledge_amount
)

backing1_2 = Backing.create(
  project_id: project1.id,
  user_id: user3.id,
  reward_id: reward1_2.id,
  backing_amount: reward1_2.pledge_amount
)

backing2_1 = Backing.create(
  project_id: project2.id,
  user_id: user1.id,
  reward_id: reward2_2.id,
  backing_amount: reward2_2.pledge_amount
)

backing2_2 = Backing.create(
  project_id: project2.id,
  user_id: user3.id,
  reward_id: reward2_3.id,
  backing_amount: reward2_3.pledge_amount
)

backing3_1 = Backing.create(
  project_id: project3.id,
  user_id: user1.id,
  reward_id: reward3_3.id,
  backing_amount: reward3_3.pledge_amount
)

backing3_2 = Backing.create(
  project_id: project3.id,
  user_id: user2.id,
  reward_id: reward3_2.id,
  backing_amount: reward3_2.pledge_amount
)

backing4_1 = Backing.create(
  project_id: project4.id,
  user_id: user1.id,
  reward_id: reward4_2.id,
  backing_amount: reward4_2.pledge_amount
)

backing4_2 = Backing.create(
  project_id: project4.id,
  user_id: user2.id,
  reward_id: reward4_3.id,
  backing_amount: reward4_3.pledge_amount
)

backing5_1 = Backing.create(
  project_id: project5.id,
  user_id: user4.id,
  reward_id: reward5_3.id,
  backing_amount: reward5_3.pledge_amount
)

backing5_2 = Backing.create(
  project_id: project5.id,
  user_id: user1.id,
  reward_id: reward5_2.id,
  backing_amount: reward5_2.pledge_amount
)

backing6_1 = Backing.create(
  project_id: project6.id,
  user_id: user2.id,
  reward_id: reward6_2.id,
  backing_amount: reward6_2.pledge_amount
)

backing6_2 = Backing.create(
  project_id: project6.id,
  user_id: user5.id,
  reward_id: reward6_3.id,
  backing_amount: reward6_3.pledge_amount
)

backing7_1 = Backing.create(
  project_id: project7.id,
  user_id: user1.id,
  reward_id: reward7_3.id,
  backing_amount: reward7_3.pledge_amount
)

backing7_2 = Backing.create(
  project_id: project7.id,
  user_id: user4.id,
  reward_id: reward7_2.id,
  backing_amount: reward7_2.pledge_amount
)

backing8_1 = Backing.create(
  project_id: project8.id,
  user_id: user5.id,
  reward_id: reward8_2.id,
  backing_amount: reward8_2.pledge_amount
)

backing8_2 = Backing.create(
  project_id: project8.id,
  user_id: user1.id,
  reward_id: reward8_3.id,
  backing_amount: reward8_3.pledge_amount
)

backing9_1 = Backing.create(
  project_id: project9.id,
  user_id: user1.id,
  reward_id: reward9_2.id,
  backing_amount: reward9_2.pledge_amount
)

backing9_2 = Backing.create(
  project_id: project9.id,
  user_id: user5.id,
  reward_id: reward9_3.id,
  backing_amount: reward9_3.pledge_amount
)

backing10_1 = Backing.create(
  project_id: project10.id,
  user_id: user1.id,
  reward_id: reward10_3.id,
  backing_amount: reward10_3.pledge_amount
)

backing10_2 = Backing.create(
  project_id: project10.id,
  user_id: user2.id,
  reward_id: reward10_2.id,
  backing_amount: reward10_2.pledge_amount
)
