let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let CodeEntry = require('../models/code');
let should = chai.should();

chai.use(chaiHttp);


describe('Index', () => {
  let addCode = chai.request.agent(app);
  let codeEntry = new CodeEntry({
    content: 'let variable = 0;'
  });

  beforeEach((done) => {
    addCode
    .post('/code')
    .send(codeEntry)
    .end((err, res) => {
      done();
    });
  });

  it('shows the list of code snippet', () => {
    addCode
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.contain('let variable = 0;');
    });
  });

});
