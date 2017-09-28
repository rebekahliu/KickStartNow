class Api::RewardsController < ApplicationController
  def create
    @reward = Reward.new(reward_params)
    @reward.project_id = params[:project_id]
    @reward.pledge_amount = @reward.pledge_amount.to_i
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def show
    @reward = Reward.new(reward)
  end

  private

  def reward_params
    params.require(:reward).permit(:title, :description, :pledge_amount, :estimated_delivery, :project_id)
  end
end
