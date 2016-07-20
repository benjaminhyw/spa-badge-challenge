# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Student.destroy_all
Badge.destroy_all

student_names = ["Abid", "Ben", "ChrisO", "Christel", "ChrisW", "David", "Ed", "TedSF", "Jonathan", "Justin", "Marshall", "Maxwell", "Michael", "Mikey", "Mikael", "Paul", "Sam"]

badge = "DBC Grad"
student_ids = []
student_names.each do |name|
  student_ids << Student.create(name: name)
end

student_ids.each do |student|
  Badge.create(student_id: student.id, description: badge, votes: 1)
end
