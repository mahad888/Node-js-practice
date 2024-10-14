const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/MyApp",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connected to mongo db")
})
.catch((err)=>{
       console.log(err)
})

const mySchema = new mongoose.Schema({
    name: {
        /// built in validators in mongoose
        type:String,
        required:true,
        unique: true,
        lowercase:true,
        trim : true,
        minlength:[5,"must contains atleast 5 letters"],
        enum : ["mahad","alian","furqan"]

    },
    password: String,
    age : {
        required: true,
        type:Number,
        // custom validator  
        validate(value){
            if (value<0){
                throw new Error("Age cannot be less than 0")
            }
        }

    },
        
    email: {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    }
   
})

const MyApp = new mongoose.model("myCollection",mySchema);

const creatingDocuments=async()=>{
    const document1 = new MyApp({

        name: "ali",
        password: "1234",
        age : 22,
        email: "ali7481@gmail.com"

    })

    const document2 = new MyApp({

        name: "talha",
        password: "4567",
        age : 22,
        email: "talha481@gmail.com"

    })

    const document3 = new MyApp({
        name: "usama",
        password: "4567",
        age : 25,
        email: "usama481@gmail.com"

    })

    const document4 = new MyApp({
        name: "tie",
        password: "4567",
        age : 25,
        email: "usama481@gmail.com"

    })

    const document5 = new MyApp({
        name: "furqan",
        password: "4567",
        age : 25,
        email: "usamom"

    })
    


    //const data = await document1.save();
     const data = await MyApp.insertMany([document5])

    
}

creatingDocuments();

const readData = async()=>{
    const getData = await MyApp.find({name:"hamza"});
    const data = await MyApp.findOne({$and :[{name:"ali"},{password:"1234"}]})
    console.log(getData)
    console.log(data);
}
readData()


const UpdateData = async()=>{
    const updtData = await MyApp.updateOne({name:"hamza"},{$set:{age:24}})
    console.log(updtData);
}

UpdateData();

const deleteData = async (_id)=>{
    //const delData = await MyApp.deleteMany({age :{$gte:23}})
    //const delData = await MyApp.deleteMany({$and :[{name:"ali"},{password:"1234"}]})
    const delData = await MyApp.findByIdAndDelete({_id})
    console.log(delData);
}

//deleteData("64dbd0f7bacdedc4ad322a50")
