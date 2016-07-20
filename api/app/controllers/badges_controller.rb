class BadgesController < ApplicationController
  before_action :find_student
  def index
    @badges = @student.badges
    render json: @badges
  end

  private
    def find_student
      @student = Student.find_by(name: params[:name])
    end

end
