const express = require("express");
const router = express.Router();
const barangRouter = require("./barang");
const jenisBarangRouter = require("./jenisBarang");
const penjualanRouter = require("./penjualan");

router.use("/barang", barangRouter);
router.use("/jenisBarang", jenisBarangRouter);
router.use("/penjualan", penjualanRouter);

module.exports = router;
