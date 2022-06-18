import cors from "cors";
import { config } from "dotenv";
import express from "express";
import * as functions from "firebase-functions";
import { getExampleResume } from "./src/services/resume.service";
import { createUser, getUser } from "./src/services/user.service";

config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/exampleResume", async (req, res) => {
  const exampleResume = await getExampleResume();
  res.send(exampleResume);
});

app.post("/users", async (req, res) => {
  try {
    await createUser(req.body);
    res.send(200);
  } catch (error) {
    res.status(400).send({
      message: "Error",
    });
  }
});

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  const user = await getUser(email);
  res.send(user);
});

export const api = functions.https.onRequest(app);
