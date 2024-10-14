const express = require("express");
const app = express();
const port = 8000;

// to set the view engine .. also must have views directory in the system 
app.set("view engine", "hbs");

// if you want to change the directory name

app.set("views","E:/Web development/Node js/Express js/viewable")


// built in middleware;
//app.use(express.static("E:/Web development/Node js/Express js/public"));

// template engine route
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
});

app.get("/contactus", (req, res) => {
    res.send("Welcome to the contact us page");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
