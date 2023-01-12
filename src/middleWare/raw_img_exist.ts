import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { isProcessed, theImgName } = req;

  if (!isProcessed && !fs.existsSync(path.join(__dirname, `../../src/assets/full/${theImgName}`))) {
    const error = new Error('that image does not exist .. check the extension');
    next(error);
  }
  next();
};
