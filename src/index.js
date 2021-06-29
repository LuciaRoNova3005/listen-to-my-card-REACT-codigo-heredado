const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const { response } = require("express");

// create server
const server = express();
server.use(express.json());
server.use(cors());
server.set("view engine", "ejs");
server.use(express.json({ limit: "10mb" }));

// init express aplication
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

const db = new Database("./src/database.db", {
  verbose: console.log,
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * from card WHERE id=?`);
  const data = query.get(req.params.id);
  console.log(data);
  if (data !== undefined) {
    res.render("pages/card", data);
  } else {
    res.render("pages/card-not-found");
  }
});

server.post("/card/", (req, res) => {
  if (
    req.body.pallete === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.email === "" ||
    req.body.phone === "" ||
    req.body.image === "" ||
    req.body.linkedin === "" ||
    req.body.github === ""
  ) {
    const response = {
      success: false,
      error: "Rellena todos los campos",
    };
    res.json(response);
  } else {
    //insertar en la bd
    const query = db.prepare(
      "INSERT INTO card (name, job, image, phone, email, linkedin, github, pallete) VALUES (?,?,?,?,?,?,?,?)"
    );
    const result = query.run(
      req.body.name,
      req.body.job,
      req.body.image,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.pallete
    );

    response.success = true;
    if (req.hostname === "localhost") {
      response.cardURL = `http://localhost:${serverPort}/card/${result.lastInsertRowid}`;
    } else {
      response.cardURL = `https://listentomycard.herokuapp.com/card/${result.lastInsertRowid}`;
    }

    res.json(response);
  }
});
