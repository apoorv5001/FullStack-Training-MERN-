let studentInfo={
    rollno:1,
    name:"Apoorv",
    course:"MCA",
    college:"KIET Group of Institution, Ghaziabad",
    marks:[10,20,30,40,50],
    music:()=>console.log("I like music"),
    play:function playfun(){console.log("I like to play")},
}
console.log(studentInfo.play());
console.log(studentInfo.music());
console.log(studentInfo.marks);
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name))
console.log(studentInfo.music());
console.log(studentInfo.play());