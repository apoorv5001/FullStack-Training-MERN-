const sum=(num1, num2, num3) => {
    console.log("Sum=",num1+num2+num3);
}
let value=[10,20,98,67,30];
sum(...value);//Spread Operator