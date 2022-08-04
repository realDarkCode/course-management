import express, { Application, Response } from "express";
import { routes } from "./controllers/routes";

// Initialize app
const app: Application = express();
const PORT = process.env.PORT || 8080;

// application routes
app.all("/health", (_req, res: Response) => {
  res.status(200).json({ message: "Application Running" });
});
routes.map((route) => (app as any)[route.method](route.path, route.handler));
app.use((_req, res: Response) => {
  res.status(404).json({ message: "Resource Not found" });
});

// Listening request
app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});
