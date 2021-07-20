/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, Type, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should respond with a status 200', (done) => {
      return agent.get('/pokemons').expect(200).end(done());
    });
    it("should return a list of 40 pokemon", (done) => {
      return agent.get("/pokemons")
        .expect(200)
        .then((res) => {
          expect(res.body.length).to.equal(40);
        })
        .end(done());
    });
    it("responded object should have a property name", (done) => {
      return agent.get("/pokemons")
        .expect(200)
        .then((res) => {
          expect(res.body[0]).to.equal(40);
        })
        .end(done());
    });
  });
  describe("GET /pokemons?name=xxx", () => {
    it("should respond with a status 400", (done) => {
      return agent.get("/pokemons?name=xxx")
        .expect(400)
        .end(done())
    });
  });
});
describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Type.sync({ force: true }));
  describe("GET /types", () => {
    it('responded objects should have correct values', function(done) {
      return Type.create({
        name: "fire",
      })
      .then(() => {
        return Type.create({
          name: "water",
        })
      })
      .then(() => {
        return agent.get('/types')
      })
      .then(types => {
        expect(types.body[0].name).to.equal("fire");
        expect(types.body[1].name).to.equal("water");
      })
      .end(done())
    });
});
});
