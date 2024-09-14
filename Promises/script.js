// let newPromise = new Promise(function(resolve, reject){
//     if(!fault){
//         console.log("I am not faulty");
//         return resolve();
//     }
//     else{
//         console.log("I am faulty");
//         return reject();
//     }
// })

// newPromise
// .then((res)=>{
//     console.log("I am resolved")
// })
// .catch(()=>{
//     console.log("I am rejected")
// })
// .finally(()=>{
//     console.log("I am going to run, no matter if the promise is fulfilled or rejected")
// })

// new Promise((resolve, reject) =>{
//     if(!fault){
//         console.log("I am not faulty")
//         return resolve();
//     }else{
//         console.log("I am faulty")
//         return reject();
//     }
// }).then(()=>{
//     console.log("Resolved")
// }).catch(()=>{
//     console.log("Rejected")
// })
// let fault = false;

// let promiseThree = new Promise((resolve, reject) => {
//   if (!fault) {
//     console.log("I am not faulty");
//     return resolve("I am resolved");
//   } else {
//     console.log("I am faulty");
//     return reject("I am rejected");
//   }
// });

// promiseThree
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("I am the case of finally");
//   });

// -> I will go to university
// -> I will open up my laptop
// -> I will complete the assignment
// -> Assignment will be scored and I will get the marks

// let promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("I will go to university")
//         resolve();
//     },1000)
// })

// let promiseFive = promiseFour.then(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I will open up my laptop")
//         return resolve();
//     })
// })
// let promiseSix = promiseFive.then(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I will complete the assignment")
//         return resolve();
//     })
// })

// promiseSix.then(()=>{
//     console.log("All the tasks are completed")
// })
