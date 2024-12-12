var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
 // .query not be used
     var query=url.parse(req.url,true);
     var filename='.'+query.pathname;
     fs.readFile(filename,function(error,Data){
      if(error){
       res.writeHead(404,{ 'Content-Type':'text/html'});
       return res.end(' enter correct url pathname');
      }
      res.writeHead(200,{ 'Content-Type':'text/html'});
      res.write(Data)
      res.write( ' happy seasons ... !');
      return res.end();
     })
}).listen(3000,()=>{ console.log('server running on http://localhost/3000')});