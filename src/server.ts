import express, { Application, Response } from "express";
import { routes } from "./routes";

// Initialize app
const app: Application = express();
const PORT = process.env.PORT || 8080;

app.all("/health", (_req, res: Response) => {
  res.status(200).json({ message: "Application Running" });
});

routes.map((route) => (app as any)[route.method](route.url, route.handler));
// Listening request
app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});
