var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('06main.html',function(err,data){
       if(err)  throw err;
       res.writeHead(200,{ 'Content-Type': ' text/html' });
       res.write(data);
       return res.end();
    })
}).listen(3000, ()=> {
    console.log(' server is running on http://localhost:3000');
})