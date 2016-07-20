class StudentsController < ApplicationController
  def index
    @all_students = Student.all
    render json: @all_students
  end

  def show
    @id = Student.find_by(id: params[:id])
    render json: @id
  end

end
