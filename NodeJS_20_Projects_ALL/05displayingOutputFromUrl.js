var http=require('http');
var url=require('url');

http.createServer(function(req,res){
   res.writeHead(200,{'content-Type':'text/html'});
   var q=url.parse(req.url,true).query;
   // localhost:3000/?naMe=karthik&timE=18:00&moNth=july
   res.write('name ='+q.naMe+' date = '+q.timE+q.moNth);
   //output name =karthik date = 18:00july
   res.end();
}).listen(3000,()=>{
    console.log(' server running on http://localhost:3000/');
})