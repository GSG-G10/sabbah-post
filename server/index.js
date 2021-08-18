const express = require('express');
const { join } = require('path');
const router = require('./app')

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'views'), { maxAge: '30d' }));
app.use(express.static(join(__dirname, './database'), { maxAge: '30d' }));
app.use(router);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server is run at http://localhost:${app.get('port')}`);
});
