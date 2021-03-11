


const httpStatus = require('http-status-codes');
const htmlContentType = { "Content-type":"text/html" };
const routes = {
    "GET" : { 
        "/info": (req,res) => {
            res.writeHead(httpStatus.OK, {"Content-type":"text/plain"});
            res.end("Welcome to the Info page!");
        }
    },
    "POST" : {}
};

exports.handle = (req,res) => {
    try{
        if(routes[req.method][req.url]){
            routes[req.method][req.url](req,res);
        }
        else{
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1> No such file exists! </h1>");
        }
    }catch(e){
        console.log(" - router::error : ",e);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
}
