const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res) => res.send("All working just fine"));

app.listen(8800, () => console.log("Server started on localhost:8800"));