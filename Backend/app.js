//Creating a Server Instance from This Folder
//Creating the configuration of the server => Write which middleware you are doing with it and what configuration you are doing with it.
import express from "express";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

export default app;
