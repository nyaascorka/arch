const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (_, res) => {
  res.render('index', {test: 'testostring', id: 200});
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
