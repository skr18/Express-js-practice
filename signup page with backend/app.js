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
.post(postdata)

function getdata(req,res){
    res.sendFile('/index.html',{root:__dirname })
}

function postdata(req,res){
    let obj = req.body
    res.json({
        message:"looged in",
        data:obj
    });
    console.log('backend ',obj);
    // res.redirect('/login.html',{root:__dirname })
}
