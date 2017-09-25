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

category1 = Category.create(
  name: 'Art'
)

category2 = Category.create(
  name: 'Comics'
)

category3 = Category.create(
  name: 'Crafts'
)

category4 = Category.create(
  name: 'Design'
)

category5 = Category.create(
  name: 'Fashion'
)

category6 = Category.create(
  name: 'Film & Video'
)

category7 = Category.create(
  name: 'Games'
)

category8 = Category.create(
  name: 'Photography'
)

category9 = Category.create(
  name: 'Technology'
)

project1 = Project.create(
  title: 'PORCELAIN | Unique tableware for your home',
  description: 'One of a kind porcelain plates to spruce up your table settings',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: user1.id,
  goal_amount: 7000,
  end_date: "1/1/2018",
  category_id: category1.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/v1506133644/hot-2574466_1920_dowvqm.jpg'
)
project2 = Project.create(
  title: 'Projecting animals one at a time',
  description: 'We are doing the good work of bringing animals in',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: user2.id,
  goal_amount: 10000,
  end_date: "6/1/2018",
  category_id: category2.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_576,w_1024/v1506133644/pug-690566_1920_vuwuox.jpg'
)

project3 = Project.create(
  title: 'HOTChocolate: A new kind of hot chocolate',
  description: 'Bring HOTChocolate to your next holiday gathering',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: user3.id,
  goal_amount: 9000,
  end_date: "3/1/2018",
  category_id: category3.id,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/v1506133644/hot-chocolate-1782623_1920_ybcmvd.jpg'
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
  title: 'Save 1 animal',
  description: 'Help bring one dog off the streets and into a safe home.',
  pledge_amount: 150,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward2_2 = Reward.create(
  title: 'Save 2 animals',
  description: 'Help bring two dogs off the streets and into a safe home.',
  pledge_amount: 200,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward2_3 = Reward.create(
  title: 'Save 3 animals',
  description: 'Help bring three dogs off the streets and into a safe home.',
  pledge_amount: 300,
  estimated_delivery: "12/12/2018",
  project_id: project2.id
)

reward3_1 = Reward.create(
  title: 'One pack of hot chocolate',
  description: 'One pack of our delicious ready to make hot chocolate mix.',
  pledge_amount: 30,
  estimated_delivery: "11/30/2018",
  project_id: project3.id
)

reward3_2 = Reward.create(
  title: 'Two packs of hot chocolate',
  description: 'Two packs of our delicious ready to make hot chocolate mix.',
  pledge_amount: 50,
  estimated_delivery: "11/30/2018",
  project_id: project3.id
)

reward3_3 = Reward.create(
  title: 'Company pack of hot chocolate',
  description: 'A pack of our delicious ready to make hot chocolate mix enough for an office space of 50 people.',
  pledge_amount: 300,
  estimated_delivery: "11/30/2018",
  project_id: project3.id
)

backing1_1 = Backing.create(
  project_id: project1.id,
  user_id: user1.id,
  reward_id: reward1_1.id,
  backing_amount: reward1_1.pledge_amount
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
  backing_amount: 1000
)
