const express = require("express");
const router = express.Router();

const  getEmpData  = require("./emp");
const  getSalData  = require("./sal");

router.post("/slip", (req, res) => {
    const emp =getEmpData.getEmpData();
    const sal =getSalData.getSalData();

    res.json({ Empdata: emp, EmpSal: sal });
});

module.exports = router;
