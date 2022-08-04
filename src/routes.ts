import { Request, Response } from "express";
export type requestHandler = (req: Request, res: Response) => void;

export interface IRoute {
  method: string;
  url: string;
  handler: requestHandler;
}

// Routes
export const routes: IRoute[] = [
  {
    method: "get",
    url: "/test",
    handler: (_req, res) =>
      res.status(200).json({ message: "Test successfully" }),
  },
];
