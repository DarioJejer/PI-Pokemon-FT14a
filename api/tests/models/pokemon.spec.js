const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
    describe("Correct creation", function () {
      it("should return the given pokemon on create method", function () {
        return Pokemon.create({
          name: "picachu",
          url: "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c325.png",
          hp: 50,
          attack: 10,
          defense: 10,
          speed: 5,
          height: 15,
          weight: 100,
        }).then((pokemon) => {
          expect(pokemon.name).to.equal("picachu");
          expect(pokemon.url).to.equal("http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c325.png");
          expect(pokemon.hp).to.equal(50);
        });
      });
    });
  });
  
});
