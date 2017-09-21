json.extract! project, :title,
                       :description,
                       :user_id,
                       :goal_amount,
                       :end_date,
                       :category_id
json.user project.user.name
