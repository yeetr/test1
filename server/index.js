const express = require("express");
const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/", (req, res) => {
    res.send("HELLO")
})  

app.listen(8000 || process.env.PORT)
