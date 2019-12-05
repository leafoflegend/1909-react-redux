const express = require('express');
const path = require('path');
const chalk = require('chalk');

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`Request made to: `, chalk.cyan(req.path));
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(chalk.greenBright(`Application started on http://localhost:${PORT}`));
});
