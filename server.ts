import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { addTower } from "./controllers/towerController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json(), cors({ origin: "*" }));

app.post("/tower/add", addTower);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
