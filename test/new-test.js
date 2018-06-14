let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);


describe('new page', () => {
  it('checks the new page status', () => {
    chai.request(app)
    .get('/new')
    .end((req, res) => {
      res.should.have.status(200);
      res.text.should.contain('Add your code here');
    });
  });
});

describe('Add a new code snippet', () => {
  it('checks if the submit is in the page', () => {
    chai.request(app)
    .get('/new')
    .end((req, res) => {
      res.should.have.status(200);
      res.text.should.contain('Submit');
    });
  });
});
