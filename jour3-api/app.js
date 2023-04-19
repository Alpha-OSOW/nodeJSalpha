const express = require ("express");
const route = require("./route")

const PORT = 4003;
const app = express()

app.use(express.json()); // middleware
app.use(route);





app.listen(PORT, () => console.log(`express start sur port ${PORT}`));