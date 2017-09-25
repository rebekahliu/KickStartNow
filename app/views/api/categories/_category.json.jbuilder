json.name category.name
json.id category.id
json.projects do
  json.array! category.projects.pluck(:id)
end
