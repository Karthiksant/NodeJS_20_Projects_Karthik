var http=require('http');
var url=require('url');
var address='http://localhost:8080/default.html?Date=13&Month=Julymonth';

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(' analyzing url...!  <br> ' );
    // var query=url.parse(req.url,true).query;
    var q=url.parse(address,true);
     res.write(` 
         addressLocalhost : ${q.host} <br>
         addressPath:${q.pathname}  <br>
         addresQuery:${q.search} <br> <br> <br> <br> 
      `);
      var queryDetails=q.query;
      res.write(` Date :${queryDetails.Date}  <br>
                      Month:${queryDetails.Month}<br>
       `)
      console.log(' url data obtained ');
      return res.end();
}).listen(3000,()=>{
     console.log(' server is running on http://localhost:3000');
})