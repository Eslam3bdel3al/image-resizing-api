"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var port = 8080;
var img_route_1 = __importDefault(require("./routes/img_route"));
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.status(200).send('WELCOME');
});
app.use('/api', img_route_1.default);
//not found response
app.use(function (req, res) {
    res.status(404).send('NOT FOUND');
});
//catch all errors
var errorHandler = function (err, req, res, next) {
    res.status(err.status || 500).send({ message: 'err: ' + err.message });
};
app.use(errorHandler);
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
module.exports = app;
