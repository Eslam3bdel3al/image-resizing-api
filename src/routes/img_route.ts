import express from 'express';

import { resTheImg } from '../controllers/img_controller';

import validateParameters from '../middleWare/validate_parameters';
import processedImgExist from '../middleWare/processed_img_exist';
import rawImgExist from '../middleWare/raw_img_exist';

const Router = express.Router();

Router.route('/image').get(validateParameters, processedImgExist, rawImgExist, resTheImg);

export = Router;
