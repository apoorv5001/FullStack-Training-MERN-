const msg= () =>{
    console.log("Hello World");
    console.log("Hello India");
}
msg();
const sum=(num1, num2) =>{
    console.log("Sum=",num1+num2);
};
sum(10,20);

//const mul=(num1, num2) =>{
//    console.log("Multiply=",num1*num2);
//};
//mul(175,225);
const mul=(num1, num2) => num1*num2;
console.log("Multiply=",mul(175,25));

const Div=(num1, num2) => num1/num2;
console.log("Divide=",Div(175,25))