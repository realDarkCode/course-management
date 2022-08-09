import { Document, model, Schema, Types } from "mongoose";

const StudentSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  { timestamps: true }
);
export interface Student extends Document {
  name: string;
  email: string;
  phone: string;
}
const StudentModel = model<Student>("student", StudentSchema);
export interface StudentViewModel {
  name: string;
  email: string;
  phone: string;
  _id?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface StudentRequestModel {
  name: string;
  email: string;
  phone: string;
}

export const getStudent = async (): Promise<StudentViewModel[]> => {
  return [
    {
      name: "Valid Name",
      email: "test@example.com",
      phone: "123456789",
    },
  ];
};

export const saveStudent = async (
  payload: StudentRequestModel
): Promise<string> => {
  const newStudent = new StudentModel(payload);
  const savedStudent = await newStudent.save();
  return savedStudent._id;
};
