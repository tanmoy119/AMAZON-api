const path = require('path');
require('dotenv').config({path: '../.env'})
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const cartRouter = require('./routers/cart');

const allowedOrigins = ["http://localhost:3000","http://localhost:5000"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 

const port = process.env.PORT;


// require db ..
require("./db/conn");


app.use(cartRouter);




app.listen(port, ()=>{
    console.log(`listen at port-${port}`);
})

