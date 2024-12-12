var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
   fs.unlink('11textFile.txt',function(err){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('data removed, file deleted');
    console.log(' im console file deleted');
    return res.end();
    })
  }).listen(3000,()=> {
 console.log(' server running on http://localhost:3000');
})