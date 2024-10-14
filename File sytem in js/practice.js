const fs = require("fs");

// fs.mkdirSync("mahad");

fs.writeFileSync("mahad/practice.txt","hello mahad");

fs.appendFileSync("mahad/practice.txt"," how are you");

const readData = fs.readFileSync("mahad/practice.txt").toString();
console.log(readData);

fs.renameSync("mahad/practice.txt","mahad/pract.txt")

fs.unlinkSync("mahad/pract.txt");

