import { IRoute } from "./routes";

export const routes: IRoute[] = [
  {
    method: "get",
    path: "/student",
    handler: (_req, res) => {
      res.status(200).json({ message: "Student get route" });
    },
  },
  {
    method: "post",
    path: "/student",
    handler: (_req, res) => {
      res.status(200).json({ message: "Student post route" });
    },
  },
];
