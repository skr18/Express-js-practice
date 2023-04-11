const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    console.log("Server make action")
    // res.setHeader('Content-Type','text/html');
    let path=''
    switch(req.url){
        case '/':
            path=path+'index.html';
            break;
        case '/about':
            path=path+'about.html'
            break;
        case '/about-me':
            // res.statusCode=301;
            // res.setHeader('Location','/about')
            res.end('/about');
            break;
        default:
            path = path + '404.html'
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.write(data);
            res.end()
        }
    })
})
server.listen(3000,()=>{
    console.log("server is running")
})