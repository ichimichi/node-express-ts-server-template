import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const address = `http://localhost:${port}`;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Express and TS Node server!');
});

app
  .listen(port, () => {
    return console.log(`server is listening on ${port} : ${address}`);
  })
  .on('error', (err: Error) => {
    return console.error(err);
  });
