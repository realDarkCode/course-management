import { Request, Response } from "express";
import { routes as studentRoutes } from "./student.controller";
export type requestHandler = (req: Request, res: Response) => void;
export interface IRoute {
  method: string;
  path: string;
  handler: requestHandler;
}

// Routes
export const routes: IRoute[] = [
  {
    method: "get",
    path: "/test",
    handler: (_req, res) =>
      res.status(200).json({ message: "Test successfully" }),
  },
  ...studentRoutes,
];
