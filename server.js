import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import BookRouter from "./router/BookRouter.js";
import Connection from "./DBConnetion.js";
import path from "path";
const app = Express();
dotenv.config();
const PORT = process.env.PORT || 8888;
const __dirname = path.resolve();
// middlewares
app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, "./client/build")));

// APIs
app.use("/book", BookRouter);
app.get("/test", (req, res) => {
  res.status(200).send({ suceess: true, message: "server working fine" });
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, (req, res) => {
  Connection();
  console.log("server is runing on port " + PORT);
});
