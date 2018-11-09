const express = require('express');
const formidable = require('express-formidable');

const app = express();

app.use(formidable());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({code: 'not found'});
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({code: 'unexpected'});
  }
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!')
});