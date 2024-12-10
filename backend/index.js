const express = require("express");
const app = express();
const port = 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.get("/api/echo", (req, res) => {
  res.json({ message: "Hello From Echo" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
