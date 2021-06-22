const express = require("express");
const cors = require("cors");

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

server.get("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});

//server.post("/new-user", (req, res) => {
// console request body params
//console.log(
///`Creating the user in database with user name: "${req.body.userName}"`
// );
// const response = {
//result: `User created: ${req.body.userName}`,
// };
// res.json(response);
//});
