// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found.')
// }
// getTempCallback('Mumbai', function(error,temp){
//   if(error){
//     console.log("Error" , error  );
//     } else{
//       console.log( "Success" , temp );
//     }
// })
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found.')
//   });
// }
//
// getTempPromise("Mumbai").then(function(temp){
//   console.log("Success ", temp);
// }, function(error){
//   console.log("error ",error);
// })


function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if( typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
    } else {
      reject("Not a number");
    }
  })
};

addPromise(5,7).then(function(sum){
  console.log("Success", sum)
}, function(error){
  console.log("Error", error)
});

addPromise(9,'9').then(function(sum){
  console.log("Success", sum)
}, function(error){
  console.log("Error", error)
});
