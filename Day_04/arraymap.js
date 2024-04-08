let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log(`Value of array X 10 =${item*10}`))
let sumValue=value.reduce((a,b)=>a+b);
console.log(`sum of Array Value=${sumValue}`);
let mulValue=value.reduce((a,b)=>a*b);
console.log(`multiply of Array Value=${mulValue}`)
//let evenNum=value.filter(item=>item%2===0);
//console.log(`Even number of Array Value=${evenNum}`);
let evenNum=value.filter(item=>item%2==0);
console.log(evenNum);