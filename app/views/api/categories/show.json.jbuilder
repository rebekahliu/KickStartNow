json.name @category.name
json.projects do
  json.array! @category.projects do |project|
    json.id project.id
  end
end
