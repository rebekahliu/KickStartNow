json.partial! 'api/projects/project', project: @project
json.about @project.about

json.rewards do
  json.array! @project.rewards, partial: 'api/rewards/reward', as: :reward
end

json.backings @project.backings
