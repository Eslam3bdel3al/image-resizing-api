import sharp from 'sharp';
import * as path from 'path';

export default async (theImgName: string, theWidth: number, theHeight: number) => {
  return await sharp(path.join(__dirname, `../../src/assets/full/${theImgName}`))
    .resize(theWidth as number, theHeight as number)
    .toFile(path.join(__dirname, `../../src/assets/thumb/${theImgName?.split('.')[0]}_${theWidth}_${theHeight}.thumb.jpg`));
};
