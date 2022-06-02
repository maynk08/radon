const express = require('express');
const lodash = require('lodash')
const externalModule = require('../logger/logger')
const externalModuleTwo = require('../util/helper')
const externalModuleThree = require('../validatter/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.log()
    externalModuleTwo.printDate()
    externalModuleTwo.printMonth()
    externalModuleTwo.getBatchInfo()
    externalModuleThree.x()
    externalModuleThree.y()
    externalModuleThree.z()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let Months = lodash.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'],3)
    console.log(Months)
   let OddNumbers = lodash.tail([1,3,5,7,9,11,13,15,17,19])
   console.log(OddNumbers)
   let arr = lodash.union([1,2,3], [4,2,34], [7,6,33], [7,34,10])
   console.log(arr)
   let cricketers = [['Batsman','Virat Kohle'],['Bowler','Jasprit Bumrah'],['All Rounder','Hardik Pandya'],['Captain','Rohit Sharma']]
   let obj = lodash.fromPairs(cricketers)
   console.log(obj)
    res.send('My second ever api!')
});
module.exports = router;
// adding this comment for no reason