const express = require('express');

const db = require('./data/dbConfig.js');


const server = express();

server.use(express.json());


server.get("/", (req, res) => {
    res.send("Haiiii!")
  })

server.get("/api/accounts", (req, res) => {
    db
        .select("*").from("accounts")
        .then(accounts => res.status(200).json(accounts))
        .catch(err => res.status(500).json({ error: "You done messed up"}))
        
})

module.exports = server;