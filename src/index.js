const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// create server
const server = express();

server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// api

// server.get("/users", (req, res) => {
//   const response = {
//     users: [{ name: "Sofía" }, { name: "María" }],
//   };
//   res.json(response);
// });

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
      error: "Inténtalo más tarde :) !",
    };
    res.json(response);
  } else {
    // Falta bbdd que nos devolvera cardID
    const response = {
      success: true,
      cardURL: "https://awesome-profile-cards.herokuapp.com/card/${cardId}",
    };
    res.json(response);
  }
});
// const response = {
//result: `User created: ${req.body.userName}`,
// };
// res.json(response);
//});

//static servers:
const staticServerPathCard = "./";
server.use(express.static(staticServerPathCard));
const staticServerPathWeb = "./";
server.use(express.static(staticServerPathWeb));

const db = new Database("./src");
