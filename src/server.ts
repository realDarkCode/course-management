import express, { Application, Request, Response } from "express";

type requestHandler = (req: Request, res: Response) => void;

interface IRoute {
  method: string;
  url: string;
  handler: requestHandler;
}
// Initialize app
const app: Application = express();
const PORT = process.env.PORT || 8080;

// Routes
const routes: IRoute[] = [
  {
    method: "get",
    url: "/test",
    handler: (_req, res) =>
      res.status(200).json({ message: "Test successfully" }),
  },
];
app.all("/health", (_req, res: Response) => {
  res.status(200).json({ message: "Application Running" });
});

routes.map((route) => (app as any)[route.method](route.url, route.handler));
// Listening request
app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});
