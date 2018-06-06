const request = require('supertest');

describe('Server Tests', () => {
  
  it("Should respond with with html to get requests to '/'", (done) => {
    request('localhost:3000')
    .get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end(() => done());
  });
});
