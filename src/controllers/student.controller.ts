import { getStudent, saveStudent } from "../services/student.service";
import { IRoute, requestHandler } from "./routes";

const getHandler: requestHandler = async (_req, res) => {
  const students = await getStudent();
  res.send(students);
};

const postHandler: requestHandler = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) return res.send("Invalid Request");
  const newStudent = await saveStudent({ name, email, phone });
  res.send(newStudent);
};
export const routes: IRoute[] = [
  {
    method: "get",
    path: "/student",
    handler: getHandler,
  },
  {
    method: "post",
    path: "/student",
    handler: postHandler,
  },
];
