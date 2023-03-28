const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require('../models/userSchema');


router.get("/getproducts", async(req,res)=>{
    try {
        const productsdata = await Products.find();
        //console.log("console the data" + productsdata)
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message); 
    }
})

router.post("/register",async(req,res)=>{
    console.log(req.body);

    const {fname,lname,email,mobile,password,cpasssword} = req.body;

    if ( !fname || !lname || !email || !mobile || !password || !cpasssword){
        res.status(422).json({error:"fill the data"})
        console.log("no data available")
    };

    try{
        const preuser = await  USER.findOne({email:email});

        if(preuser){
            res.status(422).json({error:"this  user is already present"});
        }
        else if ( password !== cpassword){
            res.status(422).json({error:"password and cpassword are not matching"});

        }
        else{
            const finalUser = new USER({
                fname,lname,email,mobile,password,cpasssword

            });

            const storedata = await finalUser.save();
            console.log(storedata);

            res.status(201).json(storedata);
        }

    }catch(error){

    }
})

module.exports = router;