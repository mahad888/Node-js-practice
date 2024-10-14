const http = require("http");
const fs = require("fs");
const requests = require("requests");
const port = 5000;

const htmlFile = fs.readFileSync("index.html","utf-8");

const replaceValue = (tempValue,newValue)=>{

   let temperature = tempValue.replace("{%temp%}", (newValue.main.temp-273.15).toFixed(2));
   temperature = temperature.replace("{%tempmin%}", (newValue.main.temp_min-273.15).toFixed(2));
   temperature = temperature.replace("{%tempmax%}", (newValue.main.temp_max-273.15).toFixed(2));
   temperature = temperature.replace("{%Location%}", newValue.name);
   temperature = temperature.replace("{%Country%}", newValue.sys.country);
   

   return temperature;


}

const server = http.createServer((req,res)=>{

    if (req.url == "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=e1a1c2bc1fa3cae8e3dc20d434a74ad5')
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);            
                // console.log(objData.main.temp);
                const  arrayData = [objData];
                const realData = arrayData.map((value)=> replaceValue(htmlFile, value) ).join("");
                res.write(realData);
                // console.log(realData);
                // console.log(arrayData);
            })
            .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
            
            res.end();
            });

    }

});

server.listen(port,"127.0.0.1",()=>{
    console.log(`http://localhost:${port}`)
})
