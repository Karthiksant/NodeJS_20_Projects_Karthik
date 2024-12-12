var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
   fs.writeFile('08textFile.txt','... write file hello karthik ... !',function(err){
    if(err) throw err;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('data written');
    console.log(' im console data saved');
    return res.end();
   })
}).listen(3000,()=> {
 console.log(' server running on http://localhost:3000');
})