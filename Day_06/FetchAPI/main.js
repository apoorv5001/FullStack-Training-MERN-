//In JSON either array will come or object will come.
// const tableID=document.getElementById("table");
// const fetchData=async()=>{
//     const dataJSON=await fetch("https://api.github.com/users")
//     const data=await dataJSON.json();
//     let displayInfo="<table border=1>";
//     displayInfo+="<tr>";
//     displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
//     displayInfo+="</tr>";
//     for (person of data)
//     {
//     displayInfo+="<tr>";
//     displayInfo+=`<td>${person.id}</td>
//                   <td>${person.login}</td>
//                   <td><img src=${person.avatar_url} 
//                   width=${200} height=${200}/></td>`;
//     displayInfo+="</tr>";
//     }
//     displayInfo+="</table>";
//     tableID.innerHTML=displayInfo;
// }
// fetchData();

const tableID=document.getElementById("table");
const fetchData=async()=>{
    const dataJSON=await fetch("https://api.github.com/users")    
    const data=await dataJSON.json();
    let displayInfo="<table border=1>";
    displayInfo+="<tr>";
    displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
    displayInfo+="</tr>";
    for (person of data)
    {
    displayInfo+="<tr>";
    displayInfo+=`<td>${person.id}</td>
                  <td>${person.login}</td>
                  <td><img src=${person.avatar_url} 
                  width=${200} height=${200}/></td>`;
    displayInfo+="</tr>";
    }
    displayInfo+="</table>";
    tableID.innerHTML=displayInfo;
}
fetchData();