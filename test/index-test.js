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

  // beforeEach((done) => {
  //   var request = chai.request(app)
  //   .post('/code')
  //   .set('content-type', 'application/json')
  //   .send({
  //     content: 'let variable = 0;'
  //   });
  //   request.end((err, res) => {
  //     done();
  //   });
  // });

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
      // res.body.should.be.to.deep.equal({});
    });
  });

});
