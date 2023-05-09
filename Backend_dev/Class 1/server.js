// import express
const express= require('express');
// server instantiate
const app=express();

// used to parse req.body in express -> POST OR PUT
const bodyParser= require('body-parser');

// specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());

 
// activate server on 3000 port
app.listen(8000,()=>{
    console.log("Server Started at port no. 8000")
})

// Routes
app.get('/',(request,response)=>{
    response.send("Hello ji, Kaise ho saare");
})

app.post('/api/cars',(request,response)=>{
    const{name, brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted Successfully.")
})

const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection Successful")})
.catch((error)=> {console.log("Recieved an error")});
