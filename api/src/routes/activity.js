const router = require('express').Router();
const {Country, Activity} = require('../db.js');
const axios = require('axios');

router.get('/', async function (req, res, next){
  try {
      const activity = await Activity.findAll({
        attributes: ["id", "name", "difficulty", "duration", "season"],
        include: [
        {
          model: Country,
          through: {
            attributes: [],
          }
        }]
      });
      return res.json(activity)
    } catch(error) {
      next(error);
    }
})

router.post('/', function (req, res, next) {
    const {
      name,
      difficulty,
      duration,
      season,
      countries
    } = req.body;
    Activity.findOrCreate({
      where:{
        name: name,
        difficulty: parseInt(difficulty[0]),
        duration: duration,
        season: season[0]
      }
    }).then((activity)=>{
      countries.forEach((id) => activity[0].addCountries(id))
    })
    res.sendStatus(200).end();
})

module.exports = router;
