import { getStudent } from "../services/student.service";
import { IRoute, requestHandler } from "./routes";

const getHandler: requestHandler = (_req, res) => {
  const students = getStudent();
  res.send(students);
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
    handler: (_req, res) => {
      res.status(200).json({ message: "Student post route" });
    },
  },
];
