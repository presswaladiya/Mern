const express = require("express");
const router = express.Router();

let salData = {};  // store the latest salary data

router.post("/sal", (req, res) => {
    salData = req.body;
    res.json({ EmpSal: salData });
});

const getSalData = () => salData;

module.exports = {
    router,
    getSalData
};
