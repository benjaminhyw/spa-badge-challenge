class StudentsController < ApplicationController
  def index
    @all_students = Student.all
    render json: @all_students
  end

  def show
    @name = Student.find_by(name: params[:name])
    render json: @name
  end

end
