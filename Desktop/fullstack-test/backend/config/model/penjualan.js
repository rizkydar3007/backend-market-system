const Sequelize = require("sequelize");
const db = require("../database/mysql");
const barang = require("./barang");

var penjualan = db.define(
  "transaksi_penjualan",
  {
    id_penjualan: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    id_barang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qty_terjual: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

penjualan.hasOne(barang, { foreignKey: "id_barang" });
penjualan.belongsTo(barang, { foreignKey: "id_barang" });

penjualan.removeAttribute("id");
module.exports = penjualan;
