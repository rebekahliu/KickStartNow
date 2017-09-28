json.extract! reward, :id,
                      :title,
                      :description,
                      :pledge_amount,
                      :estimated_delivery,
                      :project_id

json.backingUserIds reward.backing_users.pluck(:id)
