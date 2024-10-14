const express = require('express');
const router =  express.Router();
const Student = require("./students")


// router.post("/students",(req,res)=>{
//     console.log(req.body)
//     const student = new Student(req.body);
//     student.save().then(()=>{
//         res.status(201);
//         res.send(student);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
       
   
// })
router.post('/students', async (req, res)=>{
    try {
            const student = new Student(req.body);
            const createStudent = await student.save();
            res.status(201);
            res.send(createStudent);
            if(!createStudent){
                res.status(404).send("Page not found");
            } 
            else{
                res.send(createStudent);
            }   
    } catch (error) {
       
        res.status(500);
        res.send(error);
    }   
});

router.get("/students",async(req,res)=>{
    try {
          const studentsData = await Student.find();
        
          if(!studentsData){
            res.status(404).send("Page not found");
        }
        else{
             res.send(studentsData);
                }
        
    } catch (error) {
        res.status(500);
        res.send(error);
        
    }
});

router.get("/students/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const studentData = await Student.findById({"_id":id});

        if(!studentData){
            res.status(404).send("Page not found");
        }
        else{
            res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error);
        
    }
});   

router.get("/students/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const studentData = await Student.findById({"_id":id});
       
        if(!studentData){
            res.status(404).send("Page not found");
        }
        else{
            res.send(studentData);

        }
        
    } catch (error) {
        res.status(500).send(error);
        
    };
}); 

router.patch("/students/:email",async(req,res)=>{
    try {
        const email = req.params.email;
        const studentData = await Student.findOneAndUpdate({email},req.body,{ new : true });

        if (!studentData) {
            res.status(404).send("Page not found");
        } else {
            res.send(studentData);
        }
    } catch (error) {
        res.status(500).send(error);
        
    }
}); 


router.delete("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentsData = await Student.findByIdAndDelete(_id);
        

        if(!studentsData){
            res.status(404).send("Page not found");
        }
        else{
            res.send(studentsData);
        }

        
    } catch (error) {
        res.status(500).send(error);
    }   
})

module.exports = router;