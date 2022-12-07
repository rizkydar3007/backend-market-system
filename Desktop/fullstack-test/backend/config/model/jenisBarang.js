const Sequelize = require("sequelize");
const db = require("../database/mysql");

var jenisBarang = db.define(
  "jenis_barang",
  {
    id_jenis_barang: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nama_jenis_barang: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

jenisBarang.removeAttribute("id");
module.exports = jenisBarang;
