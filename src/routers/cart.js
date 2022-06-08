const express = require('express');
const cartRouter= express.Router();
const auth = require('../middleware/auth');
const cart = require('../models/cart');

//cartRouter.use(express.json());
//cartRouter.use(express.urlencoded({extended:false}));


cartRouter.get('/get/cart/data', auth, async (req,res)=>{
    try {
        const data= await cart.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

cartRouter.post('/post/cart/data', auth,async(req,res)=>{
    try {
        const adata = new cart({
            heading:req.body.heading,
    fild1:{
      title:req.body.fild1.title,
      img:req.body.fild1.img
    },
    fild2:{
      title:req.body.fild2.title,
      img:req.body.fild2.img
    },
    fild3:{
      title:req.body.fild3.title,
      img:req.body.fild3.img
    },
    fild4:{
      title:req.body.fild4.title,
      img:req.body.fild4.img
    }
        });
        const sdata = await adata.save();
        res.status(200).send(sdata);
        
    } catch (err) {
        console.log(err);
    }
})


module.exports =cartRouter;