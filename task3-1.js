Content Type: 
const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.htm') 
// Assume we have a static folder having 3 static files 1)example.json 2)example.png  3)index.htm
    res.writeHead(200,{'content-type':'text/html'})
    readStream.pipe(res)
}).listen(3000);
