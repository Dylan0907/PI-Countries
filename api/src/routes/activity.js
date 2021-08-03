const router = require('express').Router();
const {Country, Activity} = require('../db.js');
const axios = require('axios');

router.post('/', async function (req, res, next) {
  try {
    const {
      name,
      difficulty,
      duration,
      season
    } = req.body;
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season
     })
     res.json(newGame.toJSON())
   } catch(error){
     next(error)
   }
})

module.exports = router;
