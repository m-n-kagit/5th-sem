// let users = ['mohit','ashish'];

// let arrOfPromises = users.map((user)=>
//     fetch(`https://api.github.com/users/${user}`)
// ); //fetch() return array of Promises.

// let promise = Promise.all(arrOfPromises);
// promise.then((response) => response.forEach((data) => console.log(data.url)))
// .catch((err)=> console.log(err.message));

//the below one is the example of a thing that 
//if in the array of promises one of the promise
//then all promise gets rejected.

let promise1 = new Promise((resolve) => setTimeout(()=> 
    resolve("Promise 1 resolved"),3000))

let promise2 = new Promise((_, reject)=>  // written differently
    //because the function reject could be treated as function response
    setTimeout(() => reject(new Error("Promise 2 reject")), 2000)
);

let promise3 = new Promise((resolve)=> setTimeout(()=> 
    resolve("Promise 3 resolved"),4000));


let arrOfPromises = [promise1, promise2,promise3];

// let promises = Promise.all(arrOfPromises);
// promises.then((res) => console.log(res).catch((err)=> console.log(err)));

//below one has no issue like that , it will return 
let promise = Promise.allSettled(arrOfPromises);
//takes an array of Promises and returns a new Promise 
// that resolves when all the input promises have settled(either resolved or rejected)
// promise.then((response) => console.log(response)
// )

// let r_promise = Promise.race(arrOfPromises);
// r_promise.then((res)=> console.log(res)
// );

let any_promise = Promise.any(arrOfPromises);
any_promise.then((res)=> console.log(res)
)
