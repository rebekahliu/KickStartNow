if user
  json.extract! user, :id, :username
else
  {}
end
