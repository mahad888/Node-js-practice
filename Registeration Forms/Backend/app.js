
require("dotenv").config()
const express = require('express');
require("./dbConnector");
const Register = require ("./formSchema")
const router = express.Router();
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY || "Muhammadmahaadgujjarchohansulatanfaisalabad"; 

//const user = require("./students")
//const studentRouter = require("./studentApi");

const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const hbs = require ("hbs");


app.use(express.static(path.join(__dirname,"../public")))
app.set('view engine', 'hbs');
app.set("views","e:/Web development/Node js/Registeration Forms/views"); // Specify the correct views directory 
hbs.registerPartials(path.join(__dirname,"../Partials"))


//app.use(studentRouter);

app.get("/index", (req, res)=>{
    res.render('index')
    console.log(`hello g ${req.cookies.jwt}`)
});

app.get("/login", (req, res)=>{
    res.render('login');
});



app.post("/login", async (req, res)=>{

   try {
          const email = req.body.email;
          const password = req.body.password;
          console.log(email, password);
        const useremail = await Register.findOne({email:email});
       
        if(useremail){
            const  passwordMatch = await bcrypt.compare(password,useremail.password);
            if(passwordMatch){
                 const token = jwt.sign({ email: useremail.email }, JWT_SECRET);
                 res.cookie("jwt",token,{
                    maxAge: 60 * 1000 ,
                    httpOnly:true
                });
                 res.status(201).render('index', { token });
                //  console.log(token)
                 
                // console.log(process.env.JWT_SECRET_KEY)
                // console.log(token);
  

            }
            else{
                res.render('login', { errorMessage: 'Password is incorrect' });
                        }
        }
        
        else {
            
            res.render('login', { errorMessage: 'Email does not exist' });
        }

    
    
   } catch (error) {
          res.status(500).send(error);
   }
});

  

app.get("/register", (req, res)=>{
    res.render('registeration');
});

app.post("/register", async(req, res)=>{
    try {

       console.log(req.body.password,req.body.confirmpassword);
        if(req.body.password === req.body.confirmpassword){
            const passwordhash = await bcrypt.hash(req.body.password,10);
            const userData = new Register({
                firstname: req.body.firstname,
                lastname :req.body.lastname,
                password : passwordhash,
                confirmpassword: passwordhash,
                email : req.body.email,
                age : req.body.age,
                gender :req.body.gender,
                phone: req.body.phone,
       
              })
              
              const Registerdata = await userData.save();
              const token = jwt.sign({ email: req.body.email }, JWT_SECRET, );
              res.status(201).render('login', { token });
              res.cookie("jwt",token,{ maxAge: 60 * 1000 });
              console.log(token);

        }
        else{
            res.status(400).send("Password does not match")
        }
     
    
    } catch (error) {
        res.send(error);
    
    }
    
});
app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
    console.log(JWT_SECRET)
});