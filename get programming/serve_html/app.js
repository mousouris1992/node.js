const fs = require('fs');
const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const router = require('./router');

const plainTextContentType = {"Content-type":"text/plain"};
const htmlContentType      = {"Content-type":"text/html"};

const SendFile = (file,res) => {
    fs.readFile(file, (error,data) =>{
        if(error)
            console.log("Error reading file...");
        else
            res.end(data);
    });
};

// Set up routing //
// pair each <URL> to a specific <action>
router.get("/", (req,res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("INDEX");
});
router.get("/index.html", (req,res) => {
    res.writeHead(httpStatus.OK, htmlContentType);
    SendFile("views/index.html", res);
});
router.post("/", (req,res) => {
    res.writeHead(httpStatus.OK, plainTextContentType);
    res.end("POSTED");
});
router.get("/image", (req,res) => {
    res.writeHead(httpStatus.OK, {"Content-type":"image/png"});
    SendFile("assets/images/image.png", res);
});

http.createServer(router.handle).listen(3000);


// http.createServer((req,res) => {
//     var url = req.url;
//     if(url.indexOf(".html") !== -1){
//         res.writeHead(httpStatus.OK, {"Content-type":"text/html"});
//         RespondTo(`./views${url}`, res);
//     }
//     else if(url.indexOf(".js") !== -1){
//         res.writeHead(httpStatus.OK, {"Content-type":"text/javascript"});
//         RespondTo(`./assets/js${url}`, res);
//     }
//     else if(url.indexOf(".css") !== -1){
//         res.writeHead(httpStatus.OK, {"Content-type":"text/css"});
//         RespondTo(`./assets/css${url}`, res);
//     }
//     else if(url.indexOf(".png") !== -1){
//         res.writeHead(httpStatus.OK, {"Content-type":"image/png"});
//         RespondTo(`./assets/images${url}`, res);
//     }
//     else{
//         sendErrorResponse(res);
//     }

// }).listen(port);


// const sendErrorResponse = res => {
//     res.writeHead(httpStatus.NOT_FOUND, {"Content-type":"text/html"});
//     res.end("<h1> File Not Found </h1>");
// }

// const RespondTo =  (file, res) => {
//     if(fs.existsSync(file)){
//         fs.readFile(file, (error,data) => {
//             if(error){
//                 console.log(error);
//                 return sendErrorResponse(res);
//             }
//             res.end(data);
//         });
//     }
//     else{
//         return sendErrorResponse(res);
//     }
// };


console.log(' - Server listing on port: ', port);
