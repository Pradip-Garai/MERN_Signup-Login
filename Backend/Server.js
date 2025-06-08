const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const main = require('./Models/db');
const auth = require('./Routes/auth');
const ProductsRouter = require('./Routes/ProductsRouter');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", auth);

app.use("/products", ProductsRouter);



main()
.then(()=>{

    console.log("Database Successfully Connected to Server");
    app.listen(PORT,()=>{
         console.log(`Server Running at Port ${PORT}`);
    });
})
.catch((error)=>{
    console.log("Error : "+error);
})

