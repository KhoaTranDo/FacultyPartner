const express = require("express");
const app= express();
const connectToDatabase = require("./config/connectToDatabase");
// const connectToDatabase = require('./config/connectToDatabase'); //connect database mongoose

//Ket noi database
connectToDatabase();

// Goi Router
const router = require("./routers");

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router(app);
const PORT = process.env.PORT || 6001;

app.listen(PORT,()=> console.log(`Server running on port :${PORT}`))