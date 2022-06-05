import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { getEmptyResume, getExampleResume } from "./src/service/resume.service";

config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/emptyResume", async (req, res) => {
  const emptyResume = await getEmptyResume();
  res.send(emptyResume);
});

app.get("/exampleResume", async (req, res) => {
  const exampleResume = await getExampleResume();
  res.send(exampleResume);
});

app.listen(3001);
