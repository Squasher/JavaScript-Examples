// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

// MMH
const calculate = {
  add: function(a,b){
    console.log(a + b);
  },
  sub: function(a,b){
    console.log(a - b);
  },
  mul: function(a,b){
    console.log(a * b);
  },
  div: function(a,b){
    console.log(a / b);
  }
};

calculate.add(5,7);
calculate.sub(12,6);
calculate.mul(3,9);
calculate.div(100,4);

// IIFEs
(function(name){
  console.log(`Hey ${name} Am running automatically`);
})('Korango');