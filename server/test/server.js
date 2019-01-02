import request from 'supertest';
import app from '../server';

describe('Server', () => {
  describe('GET * route', () => {
    it('it should respond with 200 with content', (done) => {
      request(app)
        .get('/*')
        .expect(200, done);
    })
  });
});