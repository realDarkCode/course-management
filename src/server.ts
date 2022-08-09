import express, { Application } from "express";
import mongoose from "mongoose";
import routes from "./controllers/routes";

// Connecting to database
const databaseConnection = async () => {
  try {
    const connectionURI = "mongodb://localhost:27017/course-management";

    await mongoose.connect(connectionURI);
    console.log("Database Connection stablish successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const init = async (): Promise<void> => {
  // Initialize app
  const app: Application = express();
  const PORT = process.env.PORT || 8080;
  await databaseConnection();
  app.use(express.json());
  app.use("/api", routes);
  // Listening request
  app.listen(PORT, () => {
    console.log(`Server Started at port: ${PORT}`);
  });
};

init();
