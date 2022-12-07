const model = require("../config/model/index");
const controller = {};

controller.listBarang = async function (req, res) {
  try {
    let barang = await model.barang.findAll({
      include: [
        {
          model: model.jenisBarang,
        },
      ],
    });
    if (barang.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Menampilkan List Data Barang !",
        data: barang,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Menampilkan List Data Barang !",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.detailBarang = async function (req, res) {
  try {
    let barang = await model.barang.findAll({
      where: {
        id_barang: req.params.id_barang,
      },
      include: {
        model: model.jenisBarang,
      },
    });
    if (barang.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Menampilkan Detail Data Barang !",
        message: barang,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Menampilkan Detail Data Barang !",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.createBarang = async function (req, res) {
  try {
    let barang = await model.barang.create({
      id_barang: req.body.id_barang,
      nama_barang: req.body.nama_barang,
      stok: req.body.stok,
      id_jenis_barang: req.body.id_jenis_barang,
    });
    res.json({
      status: 200,
      message: "Berhasil Membuat Data Barang !",
      data: barang,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.updateBarang = async function (req, res) {
  try {
    await model.barang.update(
      {
        nama_barang: req.body.nama_barang,
        stok: req.body.stok,
        id_jenis_barang: req.body.id_jenis_barang,
      },
      {
        where: {
          id_barang: req.params.id_barang,
        },
      }
    );
    res.json({
      status: 200,
      message: "Berhasil Mengubah Data Barang !",
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.deleteBarang = async function (req, res) {
  try {
    await model.barang.destroy({
      where: {
        id_barang: req.params.id_barang,
      },
    });
    res.json({
      status: 200,
      message: "Berhasil Menghapus Data Barang !",
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

module.exports = controller;
