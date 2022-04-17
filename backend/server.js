require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

// move json data from and to react client
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });

app.use('/api/products', productRoutes);

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('../build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT_BACK || 5000;

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))