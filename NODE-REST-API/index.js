const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const PostRoute=require("./routes/posts");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",PostRoute)

// Logging the MONGO_URL to ensure it's being read correctly
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Social_Media_App";

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1); // Exit the process with failure
  }
}

//root


// Start the server after connecting to the database
const PORT = process.env.PORT || 3000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });
});

