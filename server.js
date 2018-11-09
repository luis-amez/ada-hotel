const express = require('express');
const formidable = require('express-formidable');

const app = express();

app.use(formidable());

// Routes and controllers, all together, :-O

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!')
});