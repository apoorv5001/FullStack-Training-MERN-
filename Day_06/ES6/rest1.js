//rest parameters
const sum=(num1, num2,...numbers)=>{
    let s=0;
    if(numbers.length>0){
    let s=numbers.reduce((a,b)=>a+b);
    }
    console.log("Sum of numbers=",(num1+num2+s));
}
sum(10,35,89,56,78,20);