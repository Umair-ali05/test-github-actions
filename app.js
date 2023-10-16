import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the server');
});

app.get('/get-user', (req, res) => {
  res.status(404).send('sign up first to get the user');
});

app.listen(3333, () => {
  console.log('app is listening on port 3333');
});
