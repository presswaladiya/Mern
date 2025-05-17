const express = require("express");
const router = express.Router();

let empData = {};  // store the latest emp data

router.post("/emp", (req, res) => {
    empData = req.body;
    res.json({ Empdata: empData });
});


const getEmpData = () => empData;

module.exports = {
    router,
    getEmpData
};
