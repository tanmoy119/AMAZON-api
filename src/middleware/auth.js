const express = require('express');


const auth = async (req, res, next)=>{
try {
    
    const key = await req.query.key;
    if(key==process.env.KEY){
        next();
    }else{
     res.send("invalide");   
    }

    
} catch (err) {
    console.log(err);
}

}

module.exports = auth ;