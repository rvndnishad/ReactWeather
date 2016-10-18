// var names = ["Arvind", "Pravin", "Viru"];

// names.forEach(function(name){
//   console.log("forEach",name);
// });
//
// names.forEach((name) => {
//   console.log( name );
// })

// names.forEach((name) => console.log("Name: ", name));

// var returnMe = (name) => name+ '!';
// console.log(returnMe('Arvind'));
//
// var person = {
//   name:"Arvind",
//   greet: function(){
//     names.forEach((name) =>{
//       console.log(this.name + " says hi to " + name);
//     });
//   }
// }
//
// person.greet();


//Challenge alert-heading

function add(a,b) {
  return a+b;
}


let addStatement = (a,b)=> {
  return a+b
}

// console.log(addStatement(3,5));

var addExpression = (a,b) => a+b;
console.log(addExpression(5,5));
//
// console.log(add(1,3));
// console.log(add(9,0));
