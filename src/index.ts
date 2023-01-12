import express, { Express, Request, Response } from 'express';
import type { ErrorRequestHandler } from 'express';

const port = 8080;

import img_route from './routes/img_route';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('WELCOME');
});
app.use('/api', img_route);

//not found response
app.use((req: Request, res: Response) => {
  res.status(404).send('NOT FOUND');
});

//catch all errors
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ message: 'err: ' + err.message });
};
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export = app;
