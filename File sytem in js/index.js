const fs = require("fs");

//writing data in filesystem

fs.writeFileSync("read.txt","welcome here what you want from us");

// appending data in file system

 fs.appendFileSync("read.txt",", hello g");


 // reading data from file
 const BufferData = fs.readFileSync("read.txt");
 const readData = BufferData.toString();
 console.log(readData);

 fs.renameSync("read.txt","myreadWrite.txt")

 console.log("hello dunia");
 

   