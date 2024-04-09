// let age=17;
// const info=new Promise((resolve, reject)=>{
//     if (age>=18){
//         resolve("You are eligible for vote");
//     } else {
//         reject("You are not eligible for vote");
//     }
// })
// info.then(result=>console.log(result))//Used when resolve is used
// .catch(error=>console.log(error));//Used when reject is used

// let age=21;
// const info=new Promise((resolve, reject)=>{
//     if (age>=18){
//         resolve("You are eligible for vote");
//     } else {
//         reject("You are not eligible for vote");
//     }
// })
// info.then(result=>console.log(result))//Used when resolve is used
// .catch(error=>console.log(error));//Used when reject is used

// const resultInfo=async ()=>{
//     let result=await info;
//     console.log(result);
// }
// resultInfo();//Async Await doesn't work in case of Reject

let age=12;
const info=new Promise((resolve, reject)=>{
    if (age>=18){
        resolve("You are eligible for vote");
    } else {
        reject("You are not eligible for vote");
    }
})
info.then(result=>console.log(result))//Used when resolve is used
.catch(error=>console.log(error));//Used when reject is used

const resultInfo=async ()=>{
  try{ 
    let result=await info;
    console.log(result);
} catch(error) {
    console.log(error);
}}
resultInfo();//Async Await doesn't work in case of Reject