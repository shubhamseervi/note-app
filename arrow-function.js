var square = x => x * x;

console.log(square(9));

var user = {
  name: 'shubham',
  sayHi: ()=> {
    console.log(arguments);
    console.log(`hi. im ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`hi im ${this.name}`);
  }
};

user.sayHi(1,2,3 );
