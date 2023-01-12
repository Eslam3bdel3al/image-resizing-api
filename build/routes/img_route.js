"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var img_controller_1 = require("../controllers/img_controller");
var validate_parameters_1 = __importDefault(require("../middleWare/validate_parameters"));
var processed_img_exist_1 = __importDefault(require("../middleWare/processed_img_exist"));
var raw_img_exist_1 = __importDefault(require("../middleWare/raw_img_exist"));
var Router = express_1.default.Router();
Router.route('/image').get(validate_parameters_1.default, processed_img_exist_1.default, raw_img_exist_1.default, img_controller_1.resTheImg);
module.exports = Router;
