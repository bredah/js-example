import chai from 'chai';
import chaiHttp from 'chai-http';

// Configure chai
chai.use(chaiHttp);
chai.should();

let age = 0;
let agree = false;

describe('Form', () => {
  it('Don\'t fill the form and submit', (done) => {
    agree = false;
    chai.request('http://localhost:8080/api')
      .get(`/form`)
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Please, fill the age');
          done();
    });  
  });
  it('Don\'t fill the age', (done) => {
    age = '';
    agree = true;
    chai.request('http://localhost:8080/api')
      .get(`/form?age=${age}&agree=${agree}`)
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Please, fill the age');
          done();
    });  
  });
  
  it('Don\'t accept the rules', (done) => {
    age = 30;
    agree = false;
    chai.request('http://localhost:8080/api')
      .get(`/form?age=${age}&agree=${agree}`)
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Please, agree the rules');
          done();
    });  
  });
  
  it('Submit the form', (done) => {
    age = 30;
    agree = true;
    chai.request('http://localhost:8080/api')
    .get(`/form?age=${age}&agree=${agree}`)
    .end((err, res) => {
      res.should.have.status(200);
        res.body.should.be.a('Hello');
        done();
    });  
  });
});
