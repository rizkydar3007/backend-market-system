const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/", controller.jenisBarang.listJenisBarang);
router.get("/:id_jenis_barang", controller.jenisBarang.detailJenisBarang);
router.post("/", controller.jenisBarang.createJenisBarang);
router.put("/:id_jenis_barang", controller.jenisBarang.updateJenisBarang);
router.delete("/:id_jenis_barang", controller.jenisBarang.deleteJenisBarang);

module.exports = router;
