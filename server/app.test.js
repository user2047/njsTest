const request = require("supertest");
const expect = require("expect");
var app = require("./app").app;

describe("Application",()=>{

  describe("#root",()=>{
    it("should return hello world response", (done) => {
      request(app)
        .get("/")
        .expect(404)
        .expect((res)=>{
          expect(res.body).toInclude({
            error:"page not found"
          });
        })
        .end(done);
    });
  });

  describe("#users",()=>{

  it("should include user of name Cam", (done) => {
    request(app)
      .get("/users")
      .expect(200)
      .expect((res)=>{
        expect(res.body).toInclude(
          {name:"Cam",age:21}
        );
      })
      .end(done);
  });
});
});
