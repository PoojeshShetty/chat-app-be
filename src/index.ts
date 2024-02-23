import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.use(express.json());

const notes = [
  {
    id: 'test',
  },
];

app.get('/', (request: Request, response: Response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (request: Request, response: Response) => {
  response.json(notes);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
