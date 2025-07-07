const Data = require('../models/Data');

exports.getPublicData = async (req, res) => {
  try {
    const { municipio, tipo } = req.query;
    const data = await Data.find({ municipio, tipo });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};