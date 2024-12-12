var events=require('events');
var eventEmitter=new events.EventEmitter();
var carEngineStarted=() =>{
 console.log('car started');
}
eventEmitter.on('start',carEngineStarted);
eventEmitter.emit('start');