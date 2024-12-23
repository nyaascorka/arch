const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send(`[
    {'d': '00:01', 'n': 'Huurmoonec', 'm': 'Азъ купило торт в честь дня рождения Профа!'},
    {'t': '2024/04/24', 'd': '00:00', 'n': 'Huurmoonec', 'm': 'Азъ создало бурмунгелятора!'},
  ]`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
