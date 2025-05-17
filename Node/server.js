const express = require("express");
const app = express();

const empModule = require("./emp");
const salModule = require("./sal");
const slipRouter = require("./slip");

app.use(express.json());


app.use("/", empModule.router);
app.use("/", salModule.router);
app.use("/", slipRouter);

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
