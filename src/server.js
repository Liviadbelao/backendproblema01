import express from "express";
import { config } from "dotenv";
import rotas from "./routes/index.routes.js";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
//refatoração, tiramos a necessidade do server de cuidar das rotas
app.use(rotas);

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);