const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

//controller
todoController(app);

app.listen(3000);
console.log("listening on PORT 3000");
