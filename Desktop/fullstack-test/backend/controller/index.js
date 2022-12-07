const barang = require("./barang");
const jenisBarang = require("./jenisBarang");
const penjualan = require("./penjualan");
const controller = {};

controller.barang = barang;
controller.jenisBarang = jenisBarang;
controller.penjualan = penjualan;
module.exports = controller;
