class BadgesController < ApplicationController
  before_action :find_student
  def index
    @badges = @student.badges
    render json: @badges
  end

  def new
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge
    else
      render json: @badge.errors.full_messages
    end
  end

  def update
    @badge = Badge.find(params[:badge_id])
    if params[:vote_type] == "up"
      @badge.votes += 1
    elsif params[:vote_type] == "down"
      @badge.votes -=1
    end
    @badge.save
    render json: @badge
  end

  private
    def find_student
      @student = Student.find_by(id: params[:id])
    end

    def badge_params
      params.require(:description, :student_id).permit(:description, :vote_type, :student_id)
    end

end
