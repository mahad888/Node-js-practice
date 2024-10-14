const fs = require("fs");

fs.writeFile("read.txt","hello world",(err)=>{
    console.log("file created");
    console.log(err);
})

fs.appendFile("read.txt"," hello",()=>{
    console.log("file appended")
})

const data = fs.readFile("read.txt", "utf-8" ,()=>{
    
})
console.log(data);

console.log("hello dunia");