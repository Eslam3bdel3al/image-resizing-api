import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { theImgName, theWidth, theHeight } = req;

  if (!fs.existsSync(path.join(__dirname, `../../src/assets/thumb/${theImgName?.split('.')[0]}_${theWidth}_${theHeight}.thumb.jpg`))) {
    req.isProcessed = false;
  } else {
    req.isProcessed = true;
  }

  next();
};
