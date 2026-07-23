const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello form backend", status: "success" });
});

app.post("/api/counter/increase", (req, res) => {
  let counter = req.body.counter;
  counter++;

  res.json({
    counter: counter,
    status: "success",
    message: "Counter increased",
  });
});

app.post("/api/counter/decrease", (req, res) => {
  let counter = req.body.counter;
  if (counter <= 0) {
    return res.json({
      counter: counter,
      status: "error",
      message: "Counter cannot be less than 0",
    });
  }
  counter--;

  res.json({
    counter: counter,
    status: "success",
    message: "Counter decreased",
  });
});

app.post("/api/counter/reset", (req, res) => {
  let counter = req.body.counter;
  counter = 0;

  res.json({ counter: counter, status: "success", message: "Counter reset" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
