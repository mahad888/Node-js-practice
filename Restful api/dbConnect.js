const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student",{
    //useCreateIndex :true,
    useNewUrlParser:true,
    useUnifiedTopology : true
    
}).then(()=>{
    console.log("connected to mongo db")
})
.catch((err)=>{
    console.log(err)
})

