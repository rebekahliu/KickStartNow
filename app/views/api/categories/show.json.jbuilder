json.name @category.name
json.projects do
  json.array! @category.projects.pluck(:id)
end
