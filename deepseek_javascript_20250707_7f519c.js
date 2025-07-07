// models/Data.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  titulo: String,
  valor: Number,
  municipio: String,
  fonte: String,
  dataAtualizacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', DataSchema);