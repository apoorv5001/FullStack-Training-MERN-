const data=[10,20,30,40,50];
let [x,y,z]=data;
// let x=data[0];
// let y=data[1];
// let z=data[2];
console.log(x,y,z);
const studentInfo={
    name:"Kiet",
    course:"MCA",
    rollno:1
}
// let {name,course,rollno}=studentInfo;
// console.log(name,course,rollno);
let {name:sname,course:mycourse,rollno:rno}=studentInfo;
console.log(sname,mycourse,rno);