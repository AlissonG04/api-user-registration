const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/server", (req, res) => {
  res.send("Server on!");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
