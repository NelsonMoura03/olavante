const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// Conexão com MongoDB
mongoose.connect('mongodb+srv://user:pass@cluster.mongodb.net/olevante?retryWrites=true&w=majority');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));