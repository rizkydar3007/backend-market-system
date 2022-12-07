const Sequelize = require("sequelize");
const db = require("../database/mysql");
const jenisBarang = require("./jenisBarang");

var barang = db.define(
  "barang",
  {
    id_barang: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nama_barang: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stok: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_jenis_barang: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

barang.hasOne(jenisBarang, { foreignKey: "id_jenis_barang" });
barang.belongsTo(jenisBarang, { foreignKey: "id_jenis_barang" });

barang.removeAttribute("id");
module.exports = barang;
