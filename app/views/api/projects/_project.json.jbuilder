json.extract! project, :title,
                       :description,
                       :user_id,
                       :goal_amount,
                       :end_date,
                       :category_id,
                       :image_url
json.id project.id
json.user project.user.name
json.category project.category.name
json.backings project.backings
