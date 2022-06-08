const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    heading:{
        type:String
    },
    fild1:{
        title:{
            type:String
        },
        img:{
            type:String
        }
    },
    fild2:{
        title:{
            type:String
        },
        img:{
            type:String
        }
    },
    fild3:{
        title:{
            type:String
        },
        img:{
            type:String
        }
    },
    fild4:{
        title:{
            type:String
        },
        img:{
            type:String
        }
    }
});

const cart = new mongoose.model('cart', cartSchema);

module.exports= cart;