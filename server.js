const express = require('express')
const app = express()
const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/.env" });



app.use(express.json());

// Connect with .env
const PORT = process.env.PORT;
const CONNECT = process.env.MONGO_URI;

// Connect with mongoose
const connectDb = async () => {
    try {
      await mongoose.connect(CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("connect to mongoDB");
    } catch (error) {
      console.log(error.message);
    }
  };

  connectDb();


app.use("/users",require('./routes/userRoutes'))

// app.use("/products",require('./routes/productRoutes'))

// Connect to server
const port = process.env.PORT;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is run in Port ${port}!`))