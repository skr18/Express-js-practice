const express = require('express')
const app = express();
const PORT =3000

let users={};
app.use(express.json())
app.get('/user',(req,res)=>{
    res.send(users);
})
app.post('/user',(req,res)=>{
    console.log(req.body);
    users=req.body
    res.send({
        message:"Data recieved sucessfuly",
        data:req.body
    })
})
app.listen(PORT);