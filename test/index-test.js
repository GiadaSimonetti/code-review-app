let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('App', () => {
  it('checks the page status', () => {
    chai.request(app)
    .get('/')
    .end((req, res) => {
      res.should.have.status(200);
      res.text.should.contain('Welcome');
    });
  });
});

describe('Add a new code snippet', () => {
  it('', () => {
    chai.request(app)
    .get('/new')
    .end((req, res) => {
      res.should.have.status(200);
    });
  });
});
