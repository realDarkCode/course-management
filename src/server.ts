import express, { Application } from "express";
import routes from "./controllers/routes";

// Initialize app
const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use("/api", routes);
// Listening request
app.listen(PORT, () => {
  console.log(`Server Started at port: ${PORT}`);
});
