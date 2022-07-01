const { Historical } = require("../models/historical.model");

const getHistorical = async (req, res, next) => {
  try {
    const info = await Historical.findAll();

    res.status(200).json({
      status: "success",
      info,
    });
  } catch (error) {
    console.log(error);
  }
};

const createHistorical = async (req, res, next) => {
  try {
    const { name, value } = req.body;

    const newHistorical = await Historical.create({
      name,
      value,
    });

    res.status(201).json({
      status: "success",
      newHistorical,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getHistorical, createHistorical };
