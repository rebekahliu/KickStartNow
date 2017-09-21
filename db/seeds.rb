# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(username: 'demo_email@gmail.com', password: 'demopassword', name: 'demo')
user = User.create(username: 'liu.rebekah@gmail.com', password: 'password', name: 'Rebekah Liu')
user = User.create(username: 'john.smith@gmail.com', password: 'password', name: 'John Smith')

project=Project.create(
  title: 'PORCELAIN | Unique tableware for your home',
  description: 'One of a kind porcelain plates to spruce up your table settings',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: 2,
  goal_amount: 7000,
  end_date: "1/1/2018",
  category_id: 1,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/v1506013961/hot-2574466_1920_wp6jkh.jpg'
)
project=Project.create(
  title: 'Projecting animals one at a time',
  description: 'We are doing the good work of bringing animals in',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: 2,
  goal_amount: 10000,
  end_date: "6/1/2018",
  category_id: 2,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/v1506014459/pug-690566_1920_ugergb.jpg'
)

project=Project.create(
  title: 'HOTChocolate: A new kind of hot chocolate',
  description: 'Bring HOTChocolate to your next holiday gathering',
  about: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way-- in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
  user_id: 3,
  goal_amount: 9000,
  end_date: "3/1/2018",
  category_id: 3,
  image_url: 'http://res.cloudinary.com/rebekahliu/image/upload/v1506014459/hot-chocolate-1782623_1920_za4tnp.jpg'
)
