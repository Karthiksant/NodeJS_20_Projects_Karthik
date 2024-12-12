var http=require('http');
var dt=require('./04moduleToTaken');

http.createServer(function(req,res){
 res.writeHead(200,{ 'contet-Type': 'text/html'});
 res.write('Date and Time is ='+dt.myDateTime());
 res.end(' page ends')
}).listen(3000,()=> {
 console.log(' click link ctrl+RC http://localhost:3000/');
})