import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";

// const register = require("./controllers/register");
// const signin = require("./controllers/signin");
// const profile = require("./controllers/profile");
// const image = require("./controllers/image");

const app = express();

app.listen("3000");

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "kata_kbbi",
  },
});

// app.use(bodyParser.json());
// app.use(cors());
// app.use(formData.parse());

app.get("/", async (req, res) => {
  try {
    const hasil = await db.select("*").from("tb_katadasar").limit(10);
    res.json(hasil);
  } catch (e) {
    console.log(e);
  }
});

// app.post("/signin", signin.handleSignin(db, bcrypt));
// app.post("/register", (req, res) => {
//   register.handleRegister(req, res, db, bcrypt);
// });
// app.get("/profile/:id", (req, res) => {
//   profile.handleProfileGet(req, res, db);
// });
// app.put("/image", (req, res) => {
//   image.handleImage(req, res, db);
// });
// app.post("/imageurl", (req, res) => {
//   image.handleApiCall(req, res);
// });

// app.listen(process.env.PORT || 3000, function () {
//   console.log("server starts");
// });
