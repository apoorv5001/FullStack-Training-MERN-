const msg=()=>console.log("Arrow function");
let data=[10,20,60,70,70.8,90.8,"MCA",msg];
console.log(data);
data[7]();
data.forEach(value=>console.log(`Value of Array =${value}`));
//for (let Value of data){
//    console.log(`Value of Array =${Value}`);
//}
//for(let index in data){
//    console.log(`Value of ${index} is ${data[index]}`);
//}
//for(let i=0;i<data.length;i++){
//    console.log(`Value of ${i} is ${data[i]}`);
//}