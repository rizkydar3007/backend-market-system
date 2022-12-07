const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.barang.listBarang);
router.get("/:id_barang", controller.barang.detailBarang);
router.post("/", controller.barang.createBarang);
router.put("/:id_barang", controller.barang.updateBarang);
router.delete("/:id_barang", controller.barang.deleteBarang);

module.exports = router;
