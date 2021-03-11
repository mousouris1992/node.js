const httpStatus = require('http-status-codes');


exports.respondNoResourceFound = (error, req, res, next) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page doesn't exist!`);
    next(error);
};
exports.respondInternalError = (error, req, res, next) => {
    console.log(`ERROR occured: ${error.stack}`);
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send(`${errorCode} | Internal Error!`);
    next(error);
}