const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// create server
const server = express();
server.use(express.json());
server.use(cors());
server.set("view engine", "ejs");
server.use(express.json({ limit: "10mb" }));

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
/*const staticServerPath = "./public";
server.use(express.static(staticServerPath));*/

const db = new Database("./src/database.db", {
  verbose: console.log,
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * from card where id= ?`);
  const data = query.get(req.params.id);
  console.log(data);
  if (data !== undefined) {
    res.render("page/card", data);
  }
});

server.post("/card", (req, res) => {
  if (
    req.body.palette === "" ||
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
      'INSERT INTO card (name, job, image, phone, email, linkedin, github, palette) VALUES (?,?,?,?,?,?,?,?)'
    );
    const result = query.run(
      req.body.name,
      req.body.job,
      req.body.image,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.palette
    );
    const response = {
      success: true,
      cardURL: "https://awesome-profile-cards.herokuapp.com/card/"+ result.lastInsertRowid
    };
    res.json(response);
  }
});
