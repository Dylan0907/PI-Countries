const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country Testing', function() {
  describe('Country model', function () {
    beforeEach(async function() {
      await Country.sync({ force: true });
    });
    describe('Validations', function () {
      it('error, no id', function(done) {
         Country.create({
          name: 'Argentina',
         })
          .then(() => done('It should not be created'))
          .catch(() => done());
      });
      it('error, no name', function(done) {
        Country.create({
          id: 'ARG',
        })
        .then(() => done('It should not be created'))
        .catch(() => done());
      });
      it('error with status', function(done) {
        Country.create({
                   id: "AFG",
                   name: "AFGHANISTAN",
                   image: "https://restcountries.eu/data/afg.svg",
                   continent: "Asia",
                   capital: ["Kabul"],
                   subregion: "Southern Asia",
                   area: 652230,
                   population: 27657145,
                  })
          .then(() => done('It should not be created'))
          .catch(() => done());
      });
    });
  });
});
