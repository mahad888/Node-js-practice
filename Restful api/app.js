const express = require("express");
const app = express();
 require("./dbConnect");
const Student = require("./students")
const studentRouter = require("./studentApi");

const port = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);


app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
});