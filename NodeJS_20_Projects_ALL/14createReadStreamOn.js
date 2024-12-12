
var fs=require('fs');
var event=fs.createReadStream('07textFile.txt');
event.on('open',function(){
console.log('file is opened')});
