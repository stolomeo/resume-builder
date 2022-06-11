import cors from "cors";
import { config } from "dotenv";
import express from "express";
import * as functions from "firebase-functions";
import {
  getEmptyResume,
  getExampleResume,
} from "./src/services/resume.service";
import { createUser } from "./src/services/user.service";

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

app.post("/user", async (req, res) => {
  try {
    await createUser(req.body);
    res.send(200);
  } catch (error) {
    res.status(400).send({
      message: "Error",
    });
  }
});

export const api = functions.https.onRequest(app);
