const router = require('express').Router();
const {Country} = require('../db.js');
const axios = require('axios');
const { Op } = require("sequelize");


router.get('/', async function (req, res, next){
  const name = req.query.name;
  if(name === undefined) {
    let countries = [];
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
      res.json(countries);
    } catch (error){
      next(error);
    }
 } else {
    const countries = await Country.findAll({
        where: {
          name: { [Op.like]: `%${name.toUpperCase()}%` },
        },
        attributes: ["id", "name", "image", "continent", "capital",
        "subregion", "area", "population"]
    });
    return res.json(countries)
 }
})

router.get('/:idCountry', async function (req, res, next){
  const {idCountry} = req.params;
  try {
      const country = await Country.findOne({ where: { id: idCountry } });
      return res.json(country)
    } catch(error) {
      next(error);
    }
})

module.exports = router;
