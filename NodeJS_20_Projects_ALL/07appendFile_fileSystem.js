var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
     fs.appendFile('08textFile.txt','hello karthik...!',function(err){
       if(err) throw err;
       res.writeHead(200,{ 'Content-Type': ' text/html' });
       res.write(' karthik  saved data');
       console.log(' saved... .. . ! ');
       return res.end();
     })
}) .listen(3000,()=> { console.log( ' server is running http://localhost:3000')})