const httpStatus = require('http-status-codes');
const htmlContentType = {"Content-type":"text/html"};
const routes = {
    "GET":
    {
        "/info" : (req,res) => {
            res.writeHead(200, htmlContentType);
            res.end(" Info Page ");
        }
    },

    "POST":
    {

    }
};

var handle = (req,res) => {

    try{
        if(routes[req.method][req.url]){
            routes[req.method][req.url](req,res);
        }
        else{
            res.writeHead(404, htmlContentType);
            res.end("<h1> Not Found </h1>");
        }
    }catch(e){
        console.log(` - router::error: ${e}`);
    }
};

var get = (url, action) => {
    routes["GET"][url] = action;
};
var post = (url, action) => {
    routes["POST"][url] = action;
};


module.exports = {
    handle,
    get,
    post
};
