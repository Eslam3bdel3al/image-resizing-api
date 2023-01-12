declare namespace Express {
  export interface Request {
    theHeight?: number;
    theWidth?: number;
    theImgName?: string;
    processedImg?: string;
    isProcessed?: boolean;
  }
}
