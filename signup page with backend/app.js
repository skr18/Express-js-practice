const express = require('express')
const app = express();
const PORT =3000
const authRouter = express.Router();
app.use(express.json())
app.use('/auth',authRouter);
app.listen(PORT,()=>{
    console.log('server is running')
});
authRouter
.route('/signup')
.get(getdata)
.post(postdata,mid)

function getdata(req,res){
    res.sendFile('/index.html',{root:__dirname })
    console.log("mid called")
}
function mid(req,res){
    res.sendFile('/login.html',{root:__dirname });
}
function postdata(req,res,next){
    let obj = req.body
    res.json({
        message:"looged in",
        data:obj
    });
    console.log('backend ',obj);
    // next();
    // res.redirect('/login.html',{root:__dirname })
}
