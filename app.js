// Import express module
const express = require("express");
const cors = require("cors");

// Create an express application
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// Define a simple route that handles GET requests to the root
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/register", (req, res) => {
  const body = req.body;
  console.log(body);
  // Respond to the client
  res.send(`Hello, ${userId}!`);
});

// Set the server to listen on a specific port
const port = 9191;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
