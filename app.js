const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('./swagger');
const userRoutes = require('./routes/users');

const app = express();
const port = 4000;

app.use(bodyParser.json());
swagger(app);
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});