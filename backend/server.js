const express = require('express')
const myDb = require("./config/db")
const cors = require('cors');
const app = express()
const route = require("./router/router")


app.use(express.json());

// Middleware to parse URL-encoded form bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(route) 




app.listen(3001, ()=> {
    console.log("server is running")
})