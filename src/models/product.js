const mongoose  = require("mongoose");


const prodectSchema = mongoose.Schema({

    heading:{
        type: String
    },
    image:{
        type:Object,
        img1:{
            type:String
        },
        img2:{
            type:String
        },
        img3:{
            type:String
        },
        img4:{
            type:String
        },
        img5:{
            type:String
        },
        img6:{
            type:String
        }
    },
    oldprice:{
        type:Number
    },
    newprice:{
        type:Number
    },
    aboutdata:{
       type:Object
    },
    about:{
        type:Array
    }

    


});
const product = new  mongoose.model('product', prodectSchema);

module.exports= product;