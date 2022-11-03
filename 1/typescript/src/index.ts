import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.get('/about', (req, res) => {
  res.send('ABOUT US');
});

app.listen(8080, () => {
  console.log('Server is listening on :8080');
});