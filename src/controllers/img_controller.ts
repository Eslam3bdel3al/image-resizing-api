import { Request, Response, NextFunction } from 'express';
import * as path from 'path';

import resize from '../utilities/resize';

export async function resTheImg(req: Request, res: Response, next: NextFunction) {
  const { isProcessed, theImgName, theHeight, theWidth } = req;

  if (theImgName && theWidth && theHeight && !isProcessed) {
    try {
      await resize(theImgName, theWidth, theHeight);
    } catch (err) {
      next(err);
    }
  }
  res
    .status(200)
    .sendFile(
      (req.processedImg = path.join(
        __dirname,
        `../../src/assets/thumb/${theImgName?.split('.')[0]}_${theWidth}_${theHeight}.thumb.jpg`
      ) as string)
    );
}
