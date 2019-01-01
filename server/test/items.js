import request from 'supertest';
import app from '../server';
import assert from 'assert';

const itemToAdd = { name: 'Flakes', purchased: false };
let itemToUpdate = {};

describe('ItemsRoute', () => {
  describe('GET /api/items route', () => {
    it('it should respond 200 with item length greater than 0', (done) => {
      request(app)
        .get('/api/items')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          assert.notEqual(res.body.length, 0);
          done();
        });;
    });
  });
  describe('POST /api/items route', () => {
    it('it should respond 201 with item equal to itemToAdd', (done) => {
      request(app)
        .post('/api/items', )
        .set('Accept', 'application/json')
        .send(itemToAdd)
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          itemToUpdate = res.body;
          assert.equal(res.body.name, itemToAdd.name);
          assert.equal(res.body.purchased, itemToAdd.purchased);
          done();
        });
    });
  });
  describe('PATCH /api/items/:id route', () => {
    it('it should respond with 200 and item purchased is true', (done) => {
      const toUpdate = { ...itemToUpdate };
      toUpdate.purchased = false;
      request(app)
        .patch(`/api/items/${itemToUpdate.id}`)
        .set('Accept', 'application/json')
        .send(toUpdate)
        .expect(200, done)
    });
  });
  describe('DELETE /api/items/:id route', () => {
    it('it should respond with 200 and item purchased is true', (done) => {
      request(app)
        .delete(`/api/items/${itemToUpdate.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    });
  });
});