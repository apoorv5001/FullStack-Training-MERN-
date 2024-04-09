//Rest Parameters
const sum=(num1=0, num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
    s=numbers.reduce((a,b)=>a+b);
    }
    console.log("Sum of numbers=",(num1+num2+s));
}
sum(1,2,3,4,5,6,7,8,9,10);