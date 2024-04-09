// 

// const sum=(num1, num2)=>{
//     print("Sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20, 30);

// const sum=(num1, num2, print)=>{
//     let s=num1+num2;
//     print("Sum="+s);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20, 30, print);

// const sum=(num1, num2, print)=>{
//     let s=num1+num2;
//     print("Sum="+s);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20, 30, (msg)=>{
//     console.log(msg);
// });

const sum=(num1, num2, print)=>{//Higher Order Function
    let s=num1+num2;
    print(s);
}
const print=(msg)=>{
    console.log(msg);
}
sum(20, 30, (sum)=>{
    if(sum>20)
    {
        console.log("Sum is greater than 20");
    }   else {
        console.log("Sum is less than 20");
    }
});