const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();


let arrMovies = ['Annabelle','The Mummy','Conjuring','Home Alone']

router.get('/movies', function(req, res){
    res.send(arrMovies)
})

router.get('/movies/:indexNumber', function(req, res){
    if(req.params.indexNumber>=arrMovies.length)
    {
        res.send("Unable to fetch movie")
    }
    else{
             res.send(arrMovies[req.params.indexNumber])
    }
})
let objMovies = [ {
    "id": 1,
    "name": "Annabelle"
   }, {
    "id": 2,
    "name": "The Mummy"
   }, {
       "id": 3,
    "name": "The Conjuring"
   }, {
    "id": 4,
    "name": "Home Alone"
   }]
router.get("/films",function(req,res){
 res.send(objMovies)
})

router.get("/films/:filmId",function(req,res)
{
    if(req.params.filmsId>=objMovies.length)
    {
        res.send("No movies exists with this id")
    }
    else
    {
        res.send(objMovies[req.params.filmId])
    }
})




module.exports = router;