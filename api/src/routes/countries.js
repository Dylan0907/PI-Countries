const router = require('express').Router();
const {Country, Activity} = require('../db.js');
const axios = require('axios');
const { Op } = require("sequelize");


router.get('/', async function (req, res, next){
  const name = req.query.name;
  let countries = []
  if(name === undefined) {

    let countriesDB = await Country.findAll({
        attributes: ["id", "name", "image", "continent", "capital",
        "subregion", "area", "population"]
    });

    if (countriesDB.length===0){
      try {
       const {data} = await axios.get(`https://restcountries.eu/rest/v2/all`);
       for(let i = 0; i<data.length; i++) {
         const country = await Country.create({
               id: data[i].alpha3Code,
               name: data[i].name.toUpperCase(),
               image: data[i].flag,
               continent:data[i].region,
               capital:data[i].capital,
               subregion:data[i].subregion,
               area: data[i].area,
               population: data[i].population
            });
         countries.push(country);
       }
       res.status(200).json(countries);
     } catch (error){
       next(error);
     }
   } else {
     try{
       res.status(200).json(countriesDB);
     } catch (error){
       next(error)
     }
   }
  } else {
     const countries = await Country.findAll({
         where: {
           name: { [Op.like]: `%${name.toUpperCase()}%` },
        },
         attributes: ["id", "name", "image", "continent", "capital",
         "subregion", "area", "population"],
     });
     if(countries.length===0){
       return res.status(400).json({msg:'No country was found'});
     } else {
       return res.status(200).json(countries)
     }
  }
})

router.get('/:idCountry', async function (req, res, next){
  const {idCountry} = req.params;
  try {
      const country = await Country.findOne({
        where: { id: idCountry },
        include: [
        {
          model: Activity,
          through: {
            attributes: [],
          }
        }]
      });
      if(!country){
        return res.status(400).json({msg:'Wrong id'});
      } else {
        return res.status(200).json(country)
      }
    } catch(error) {
      next(error);
    }
})

module.exports = router;
