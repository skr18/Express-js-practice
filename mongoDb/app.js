const express = require('express');
const app = express();
const loginRouter = express.Router();
const cookieparser = require('cookie-parser')
app.use(express.json())
app.use(cookieparser())
app.use("/auth",loginRouter);
app.listen(3000,()=>{
    console.log("Site is running")
});

loginRouter
.route('/log')
.get(getdata)
.post(login)

loginRouter
.route('/user')
.get(getd)


async function getd(req,res){
    let user = await mod.findOne()
    if(req.cookies.isloggedin){

        return res.json({
            message:'You are admin'
        })
    }else{
        return res.json({
            message:'You are not admin'
        })
    }
}

async function getdata(req,res){
    let user = await mod.findOne()
    if(user){
        res.json(user);
    }
}
async function login(req,res){
    let data = req.body
    if(data.email){
        try{

            let user =await mod.findOne({email:data.email})
            if(user.email==data.email){
                if(user.password==data.password){
                    res.cookie("isloggedin",true);
                    return res.json({
                        message:"user logedin"
                    } )
                }else{
                    return res.json({
                        message:"invaild password"
                    } )
                }
            }else{
                return res.json({
                    message:"invaild email"
                } )
            }
        }
        //query takes a obj;
        catch(err){
           return  res.json({
                message:err.message
            } )
        }
    }
}

const mongoose = require('mongoose')

const db_link='mongodb+srv://sujeetrath123:Sujeet%4094374@cluster0.y8biqkv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db_link)
.then(function (db){
    console.log("Db connected")
    // console.log(db)
}).catch(function (err){
    console.log(err)
})
const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:true
    }
}) 

const mod = mongoose.model('mod',userSchema);

//model

// (
//     async function create(){
//         let user={
//             name:"sujeet",
//             email:"sujeet@123",
//             password:"1234"
//         }
//         let db = await mod.create(user);
//         console.log(db)
//     }
// )()