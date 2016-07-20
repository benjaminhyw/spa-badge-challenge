# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

student_names = ["Abid Ramay", "Benjamin R Flores", "Chris Otto", "Christel Trutman", "Christopher Wong", "David Ramirez", "Ed Mechem", "Ted 'SF' Day-Fratto", "Jonathan Hall", "Justin Wong", "Marshall Agharanya", "Maxwell Workman", "Michael Furlong", "Michael Moore", "Mikael Teklehaimanot", "Paul Haney", "Samuel Heinz"]

badge = "DBC Grad"
student_ids = []
student_names.each do |name|
  student_ids << Student.create(name: name)
end

student_ids.each do |student|
  Badge.create(student_id: student.id, description: badge, votes: 1)
end
