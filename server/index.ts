import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { getEmptyResume } from "./src/service/resume.service";

config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const emptyResume = await getEmptyResume();
  res.send(emptyResume);
});

app.listen(3001, () => {
  console.log("Test...");
});
