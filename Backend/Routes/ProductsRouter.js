const ensureAuth = require('../Middleware/AuthProducts');

const router= require('express').Router();

router.get("/",ensureAuth,(req,res)=>{
    res.status(200).json([
        {
            name:"Iphone",
            price:100000
        },
        {
            name:"Tv",
            price:45000
        },
        {
            name:"Watch",
            price:2500
        }
    ])
});


module.exports = router;
