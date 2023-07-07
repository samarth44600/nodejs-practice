var http = require('http');
var date = require('./date')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(`now dte is : ${date.todayDate()}`)
    res.end('Hello World!');
}).listen(3030, ()=>{
    console.log("Server running on 3030");
});