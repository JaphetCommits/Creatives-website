const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const app = express();

// 1. Get the URI from the .env file
const dbURI = process.env.MONGO_URI;

// 2. Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log('✅ Success: Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('❌ Error: Could not connect to MongoDB', err);
  });

// 3. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});