const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");

describe("App",()=>{
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db",db);

  it("shoud call the spy correctly", ()=>{
    var spy = expect.createSpy();
    spy("Cam",21);
    expect(spy).toHaveBeenCalledWith("Cam",21)
  });

  it("should call saveUser with user obj",()=>{
    var email = "cam@example.com";
    var password ="123abc";

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  })
});
