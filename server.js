import express from "express";
import cors from "cors";
import knex from "knex";

// * Konfigurasi Database
const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "kata_kbbi",
  },
});

// * Inisialisasi app express.js
const app = express();
app.use(cors());

// * API cek kata baku atau tidak
app.get("/cekkata/:kata", async (req, res) => {
  try {
    const finalKata = req.params.kata.toLowerCase().replace(/\W/g, "");

    const response = await db("tb_katadasar")
      .select("katadasar")
      .where({ katadasar: finalKata })
      .limit(10);

    if (response.length == 0) {
      res.send(false);
    } else res.send(true);

    // console.log(response);
    // res.json(response);
  } catch (e) {
    console.log(e);
  }
});

app.listen("3001");
// app.listen(process.env.PORT || 3000, function () {
//   console.log("server starts");
// });
