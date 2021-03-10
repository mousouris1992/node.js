const fs = require('fs');
const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');


const routing_map = {
    "/info"    : "<h1> Info </h1>",
    "/contact" : "<h1> Contact </h1>",
    "/about"   : "<h1> About </h1>",
    "/hello"   : "<h1> Hello </h1>",
    "/error"   : "<h1> Error </h1>"
};

var server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-type" : "text/html"});
    if(rsp_body = routing_map[req.url]){
        res.write(rsp_body);
    }
    else{
        res.write('<h1> Not a valid URL </h1>');
    }
    res.end();

}).listen(port);



console.log(' - server has started...!');
