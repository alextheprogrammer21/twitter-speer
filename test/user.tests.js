let chai = require('chai');
let chaiHttp = require("chai-http");
let server = require("../app");
chai.should();
chai.use(chaiHttp);


  describe("POST /users/register" , ()=>{
    it("It should register a new user",(done)=>{

        const user = {
          email:"test123@gmail.com",
          password:"123456"
        };

        chai.request(server)
          .post("/users/register")
          .send(user)
          .end((err,res)=>{
            res.should.have.status(201);
            done();
          });
    });
        });

        describe("POST /users/login" , ()=>{
          it("It should login if right user and pw",(done)=>{
      
              const user = {
                email:"test3@gmail.com",
                password:"123456"
              };
      
              chai.request(server)
                .post("/users/login")
                .send(user)
                .end((err,res)=>{
                  res.should.have.status(201);
                  done();
                });
          });
        });
