const model = require("../config/model/index");
const controller = {};
const commonHelper = require("../helper/common");

controller.listJenisBarang = async function (req, res) {
  try {
    let jenisBarang = await model.jenisBarang.findAll();
    if (jenisBarang.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Menampilkan Data Jenis Barang !",
        data: jenisBarang,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Menampilkan Data Jenis Barang !",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

controller.detailJenisBarang = async function (req, res) {
  try {
    let jenisBarang = await model.jenisBarang.findAll({
      where: {
        id_jenis_barang: req.params.id_jenis_barang,
      },
    });
    if (jenisBarang.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Menampilkan Detail Data Jenis Barang !",
        data: jenisBarang,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Menampilkan Detail Data Jenis Barang !",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

controller.createJenisBarang = async function (req, res) {
  try {
    let jenisBarang = await model.jenisBarang.create({
      id_jenis_barang: req.body.id_jenis_barang,
      nama_jenis_barang: req.body.nama_jenis_barang,
    });
    res.json({
      status: 200,
      message: "Berhasil Membuat Data Jenis Barang !",
      data: jenisBarang,
    });
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

controller.updateJenisBarang = async function (req, res) {
  try {
    await model.jenisBarang.update(
      {
        nama_jenis_barang: req.body.nama_jenis_barang,
      },
      {
        where: {
          id_jenis_barang: req.params.id_jenis_barang,
        },
      }
    );
    res.json({
      status: 200,
      message: "Berhasil Mengubah Data Jenis Barang !",
    });
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

controller.deleteJenisBarang = async function (req, res) {
  try {
    await model.jenisBarang.destroy({
      where: {
        id_jenis_barang: req.params.id_jenis_barang,
      },
    });
    res.json({
      status: 200,
      message: "Berhasil Menghapus Data Jenis Barang !",
    });
  } catch (error) {
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

module.exports = controller;
