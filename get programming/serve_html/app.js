const fs = require('fs');
const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');


const RoutingMap = {
    "/" : "views/index.html",
    "/btn1_update" : "update_html/btn1.php"
};


const resolve_url = (url) => {
    return `views${url}.html`;
};

var server = http.createServer((req,res) => {

    if(route_url = RoutingMap[req.url]){
         
        fs.readFile(route_url, (error, data) => {
            if(error){
                console.log(' -- error reading file: ',route_url);
                res.writeHead(httpStatus.SERVICE_UNAVAILABLE, {"Content-type" : "text/html"});
                res.end(`<h1> Error processing url: ${route_url} </h1>`);
            }
            else{
                console.log(' -- done reading file: ',route_url);
                res.writeHead(200, {"Content-type" : "text/html"});
                res.end(data);                 
            }
        });
    }
    else{
        res.writeHead(httpStatus.NOT_FOUND, {"Content-type" : "text/html"});
        res.end(`<h1> Not a valid url: ${req.url} </h1>`);
    }

}).listen(port);


console.log(' - server has started...!');
