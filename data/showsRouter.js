const express = require("express");
const showsModel = require('../data/helpers/showsModel');

const router = express.Router();

//Create 


//Read
router.get('/', (req, res) =>{
    showsModel
    .get(req.id)
    .then(e =>{
        res.status(200).json(e)
    })
    .catch( error =>{
        console.log(error);
        res.status(500).json({message: "Error retrieving shows"})
    })
})



//Update 

//Delete 

//get Shows Characters

module.exports = router;