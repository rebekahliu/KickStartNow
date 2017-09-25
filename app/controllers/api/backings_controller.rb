class Api::BackingsController < ApplicationController
  def create
    @backing = Backing.new(backing_params)
    @backing.user_id = current_user.id
    if @backing.save
      render :show
    else
      render json: @backing.errors.full_messages, status: 422
    end
  end

  private

  def backing_params
    params.require(:backing).permit(:backing_amount, :project_id, :reward_id)
  end
end
