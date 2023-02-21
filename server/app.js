const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/quotes", require("./routes/quotes"));

app.listen(PORT, (err) => {
  if (err) return console.log(`Failed to listen to ${PORT}`);

  return console.log(`Listening at ${PORT}`);
});
