const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.penjualan.listPenjualan);
router.get("/:id_penjualan", controller.penjualan.detailPenjualan);
router.post("/", controller.penjualan.createPenjualan);
router.put("/:id_penjualan", controller.penjualan.updatePenjualan);
router.delete("/:id_penjualan", controller.penjualan.deletePenjualan);

module.exports = router;
