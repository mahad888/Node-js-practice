
const fs = require("fs");

const data = {
    name: "mahad",
    age: 26,
    Program:"SE"
}

const jsonData = JSON.stringify(data);
//console.log(jsonData);

fs.writeFile("jsonFile.json",jsonData,(err)=>{
    console.log(err);
})

fs.readFile("jsonFile.json","utf-8" ,(err,data)=>{
    const ObjData = JSON.parse(data);
    console.log(ObjData);
})



