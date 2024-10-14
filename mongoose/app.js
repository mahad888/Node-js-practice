 const mongoose = require("mongoose");

 mongoose.connect("mongodb://127.0.0.1:27017/admin",{

 useNewUrlParser: true,
 useUnifiedTopology:true

 }).then(()=>{
    console.log("connected to mongoDb")

 })

 .catch((err)=>{
    console.error("error connecting to mongodb",err)
 })
// creating schema such as describing structure 
 const adminSchema = new mongoose.Schema({
    name: String,
    email:String,
    pin: Number,
    Date:{
        type: Date,
        default:Date.now
    }
 })

 // creating collection..

 const AdminData = new mongoose.model("AdminData",adminSchema); 

 const creatingDocument = async()=>{

    try{
        const document = new AdminData({

            name: "mahad",
            email: "mahad7481@gmail.com",
            pin: 12345,
            
    
        })
        const document1 = new AdminData({

            name: "sultan",
            email: "mahad7481@gmail.com",
            pin: 12345,
            
    
        })
        const document2 = new AdminData({

            name: "faiq",
            email: "mahad7481@gmail.com",
            pin: 12345,
            
    
        })
        const document3= new AdminData({

            name: "usama",
            email: "mahad7481@gmail.com",
            pin: 12345,
            
    
        })
        const document4 = new AdminData({

            name: "faizan",
            email: "mahad7481@gmail.com",
            pin: 12345,
            
    
        })
    
        // const data = await document.save();

        const data = await AdminData.insertMany([document1,document2,document3,document4]);

        console.log(data);
    }

    catch(err){
        console.log();
    }
    

 }
//  creatingDocument()

const readData = async ()=>{
    const getData = await AdminData.updateOne({name:"faizan"},{$set:{email:"faizan7481@gmail.com"}});
    console.log(getData);
}

readData()