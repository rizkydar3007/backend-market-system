const model = require("../config/model/index");
const controller = {};
const commonHelper = require("../helper/common");

controller.listPenjualan = async function (req, res) {
  try {
    let penjualan = await model.penjualan.findAll({
      include: {
        model: model.barang,
      },
    });
    if (penjualan.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Mendapatkan List Data Penjualan !",
        data: penjualan,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Mendapatkan List Data Penjualan !",
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

controller.detailPenjualan = async function (req, res) {
  try {
    let penjualan = await model.penjualan.findAll({
      where: {
        id_penjualan: req.params.id_penjualan,
      },
      include: {
        model: model.barang,
      },
    });
    if (penjualan.length > 0) {
      res.json({
        status: 200,
        message: "Berhasil Mendapatkan Detail Data Penjualan !",
        data: penjualan,
      });
    } else {
      res.json({
        status: 200,
        message: "Gagal Mendapatkan Detail Data Penjualan !",
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

controller.createPenjualan = async function (req, res) {
  try {
    let penjualan = await model.penjualan.create({
      id_penjualan: req.body.id_penjualan,
      id_barang: req.body.id_barang,
      qty_terjual: req.body.qty_terjual,
    });
    await model.barang.decrement(
      {
        stok: req.body.qty_terjual,
      },
      {
        where: {
          id_barang: req.body.id_barang,
        },
      }
    );
    res.json({
      status: 200,
      message: "Berhasil Membuat Data Penjualan !",
      data: penjualan,
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.updatePenjualan = async function (req, res) {
  try {
    await model.penjualan.update(
      {
        id_barang: req.body.id_barang,
        qty_terjual: req.body.qty_terjual,
      },
      {
        where: {
          id_penjualan: req.params.id_penjualan,
        },
      }
    );
    res.json({
      status: 200,
      message: "Berhasil Mengubah Data Penjualan !",
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

controller.deletePenjualan = async function (req, res) {
  try {
    await model.penjualan.destroy({
      where: {
        id_penjualan: req.params.id_penjualan,
      },
    });
    res.json({
      status: 200,
      message: "Berhasil Menghapus Data Penjualan !",
    });
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

module.exports = controller;
