var startTime = new Date().getTime();  
function onLoadEventHandler() {  
     var latency = startTime - performance.timing.navigationStart;  
     console.log('Latency = ' + latency + 'ms');  
}  
