const express = require("express");
const server = require('./server.js');



// const PORT = process.env.PORT || 6666;
const port = 1212;


server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


