const http = require("http");
const fs = require ("fs");

const port = 5000;
const server = http.createServer((req,res)=>{
 
    if(req.url == "/"){
        res.end("Hello from the other side");
    }
   
    else if(req.url ==="/mahad"){
        res.end("hello mahad");
    }
    else if (req.url =="/aboutus"){
        res.end("hello from about us")
    }
    else if(req.url =="/userapi"){
        fs.readFile("jsonFile.json","utf-8",(err,data)=>{
            console.log(data)
            res.end(data)

        })
       
    }
    else {
        res.writeHead("404");
        res.end("<h1>404 erros pages.Page doesn't exist </h1> ")
    }

});

server.listen(port,"127.0.0.1",()=>{

    console.log(`http://localhost:${port}`)
    
});



