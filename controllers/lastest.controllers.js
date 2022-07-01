const { Lastest } = require("../models/lastest.model");

const getLastest = async (req, res, next) => {
  try {
    const info = await Lastest.findAll();

    res.status(200).json({
      status: "success",
      info,
    });
  } catch (error) {
    console.log(error);
  }
};

const createLastest = async (req, res, next) => {
  try {
    const { name, value } = req.body;

    const newLastest = await Lastest.create({
      name,
      value,
    });

    res.status(201).json({
      status: "success",
      newLastest,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getLastest, createLastest };
