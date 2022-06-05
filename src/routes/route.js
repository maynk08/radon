const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
    ]
router.post('/players', function(req, res) {
    let newEntry = req.body;
    let newEntryName = newEntry.name
    let IsRepeated = false
    for(let i=0;i<players.length;i++)
    {
       if (players[i].name == newEntryName){
           IsRepeated =true
           break
       }
        
    }
    if(IsRepeated)
    {
        res.send("Already added")
    }
    else
    {
        players.push(newEntry)
        res.send(players)
    }
})

module.exports = router;