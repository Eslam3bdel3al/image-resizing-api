import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { height, width, imgName } = req.query;
  let theWidth: unknown, theHeight: unknown;
  const theImgName: string=  imgName as string;

  if (width) {
    theWidth = parseInt(width as string);
  } else {
    const error = new Error('width is required');
    next(error);
  }

  if (height) {
    theHeight = parseInt(height as string);
  } else {
    const error = new Error('height is required');
    next(error);
  }

  if (!imgName) {
    const error = new Error('imgName is required');
    next(error);
  }

  req.theHeight = theHeight as number;
  req.theWidth = theWidth as number;
  req.theImgName = theImgName as string;
  next();
};
