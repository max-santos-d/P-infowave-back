import app from './app.js';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`);
  console.log();
});

console.log();
