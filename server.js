const express = require('express');

const db = require('./data/dbConfig.js');


const server = express();

server.use(express.json());


server.get("/", (req, res) => {
    res.send("Haiiii!")
  })

///***to "/api/accounts" ****/
server.get("/api/accounts", (req, res) => {
    db
        .select("*").from("accounts")
        .then(accounts => res.status(200).json(accounts))
        .catch(err => res.status(500).json({ error: "You done messed up"}))
        
})

server.post("/api/accounts", (req, res) => {
    const data = req.body;
    db("accounts").insert(data, "id")
        .then(ids => {res.status(200).json(ids)})
        .catch(error => {res.status(500).json(error)})
})

///**** to "/api/accounts/:id" */

server.get("/api/accounts/:id", (req, res) => {
    db.select("*").from("accounts").where("id", "=", req.params.id)
        .first()
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json({ error: "Oh noes!!!"}))
})

server.put("/api/accounts/:id", (req, res) => {
    db("accounts").where({id: req.params.id})
        .then(update => res.status(200).json(req.body))
        .catch(err => res.status(500).json({ message: "leave well enough alone"}))
})

server.delete("/api/accounts/:id", (req, res) => {
    db("accounts").where({ id: req.params.id}).delete()
        .then(item => res.status(200).json(item))
        .catch(err => res.status(500).json({ message: "too good to delete"}))
})

module.exports = server;