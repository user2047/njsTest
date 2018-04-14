const expect = require("expect");
const utils = require("./utils");

it("should add two numbers",()=>{
  var result = utils.add(33,33);
  expect(result).toBe(66).toBeA("number");
  // if (result != 66) {
  //   throw new Error(`value not correct\n\t Expected 66, but got ${result}`)
  // }
});

it("should async add",(done)=>{
  utils.asyncAdd(9,5,(result)=>{
    expect(result).toBe(14).toBeA("number");
    done();
  });
  // if (result != 66) {
  //   throw new Error(`value not correct\n\t Expected 66, but got ${result}`)
  // }
});




it("should square the input",()=>{
  var result = utils.square(4);
  expect(result).toBe(16).toBeA("number");
  // if (result != 16) {
  //   throw new Error(`value not correct\n\t Expected 16, but got ${result}`)
  // }
});

it("should async square",(done)=>{
  utils.asyncSquare(9,(result)=>{
    expect(result).toBe(81).toBeA("number");
    done();
  });
  // if (result != 66) {
  //   throw new Error(`value not correct\n\t Expected 66, but got ${result}`)
  // }
});

it("should expect some value",()=>{
  // expect(12).toNotBe(11);
  expect({name:"Cameron"}).toEqual({name:"Cameron"});
  expect([2,3,4]).toExclude(5);
  expect({name:"Cameron",
          age:21,
          location: "California"}).toExclude({
            age: 25
          })
});


it("should include first and last name",()=>{
  var result = utils.setName({},"Bob Jones");

  expect(result).toInclude({firstName:"Bob"}).toInclude({lastName:"Jones"}).toBeA("object");
});
