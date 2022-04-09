require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes');

connectDB()

const app = express();

// move json data from and to react client
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT_BACK || 5000;

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))