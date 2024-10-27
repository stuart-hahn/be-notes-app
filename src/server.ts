import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api", (req, res) => {
  res.send("API Route");
});

// const PORT = process.env.PORT || 8080;
const PORT = undefined;
app.listen(PORT!, () => {
  console.log(`Server is running on port ${PORT}, you better go catch it!`);
});
