const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "jeronimo", "index.html"));
});

app.get("/franco", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "matthew", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Three.js: http://localhost:${port}/jeronimo/`);
  console.log(`D3:  http://localhost:${port}/franco/`);
  console.log(`Tone.js: https://localhost:${port}/nemeti`);
});
