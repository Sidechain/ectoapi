import * as express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("IT WORKS!!!!!!");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
