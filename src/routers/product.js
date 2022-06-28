const express = require("express");
const productRouter = express.Router();
const auth = require('../middleware/auth');
const product = require('../models/product');

productRouter.post("/post/product/data", auth, async (req, res)=>{
    try {
        const adata = new product({
            
    heading:req.body.heading,
    image:{
        img1:req.body.image.img1,
        img2:req.body.image.img2,
        img3:req.body.image.img3,
        img4:req.body.image.img4,
        img5:req.body.image.img5,
        img6:req.body.image.img6
    },
    oldprice:req.body.oldprice,
    newprice:req.body.newprice,
    aboutdata:req.body.aboutdata,
    about:req.body.about

        });
        const sdata = await adata.save();
        res.status(200).send(sdata);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})
productRouter.get("/get/product/data", auth, async (req, res)=>{
    try {
        const data= await product.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})
productRouter.get("/get/product/data/id", auth, async (req, res)=>{
    try {
        const _id = req.query.id;
        const data= await product.find({_id});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = productRouter;




