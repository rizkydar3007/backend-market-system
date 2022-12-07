const barang = require("./barang");
const jenisBarang = require("./jenisBarang");
const penjualan = require("./penjualan");
const model = {};

model.barang = barang;
model.jenisBarang = jenisBarang;
model.penjualan = penjualan;

module.exports = model;
