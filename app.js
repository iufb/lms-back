// Import express module
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

// Replace with your Supabase credentials
const SUPABASE_URL = "https://szsmtywktedehodqdbff.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6c210eXdrdGVkZWhvZHFkYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMDc3ODUsImV4cCI6MjA0ODg4Mzc4NX0.o9RgZcXxi_GsxUlJRArnzow2MgS2yMTwGEGJWpgbLuY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// Create an express application
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// Define a simple route that handles GET requests to the root
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/register", async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const { data, error } = await supabase.from("register").insert([body]);

    if (error) {
      throw error;
    }
    console.log("Data inserted successfully:", data);
  } catch (err) {
    console.error("Error inserting data:", err.message);
  }
  // Respond to the client
  res.send(`Hello , ${body.email}!`);
});

// Set the server to listen on a specific port
const port = 9191;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
