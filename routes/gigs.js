const express= require('express')
const routes=express.Router();
const db =require('../config/db');
const Gig=require('../model/Gigs');

routes.get('/', async(req, res)=>{
try {
    const result= await Gig.findAll();
    console.log(result);
    res.status(200).send(result);
} catch (error) {
    console.log('erroe'+error);
}
});

module.exports=routes