import { Request, Response, Router } from "express";
import { routes as studentRoutes } from "./student.controller";
export type requestHandler = (req: Request, res: Response) => void;
export interface IRoute {
  method: string;
  path: string;
  handler: requestHandler;
}

// Routes
const routes: IRoute[] = [
  {
    method: "get",
    path: "/health",
    handler: (_req, res) => {
      res.status(200).json({ message: "Application Running" });
    },
  },
  ...studentRoutes,
];

const router = Router();

// application routes

routes.map((route) => (router as any)[route.method](route.path, route.handler));
router.use((_req, res: Response) => {
  res.status(404).json({ message: "Resource Not found" });
});

export default router;
