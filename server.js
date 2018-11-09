const express = require('express');
const formidable = require('express-formidable');
const HotelCollection = require('./models/hotelCollection');
const Hotel = require('./models/hotel');

const app = express();

app.use(formidable());

let hotelCollection = HotelCollection.load('./hotels-list.json');

app.get('/hotels', (req, res, next) => {
  res.status(200).json(hotelCollection.hotels);
});

app.post('/hotels', (req, res, next) => {
  if(!req.fields.name || !req.fields.city) {
    res.status(422);
    return next(new Error('Name and city required!'));
  }

  let hotel = new Hotel(req.fields.name, req.fields.city);
  hotelCollection.addHotel(hotel);
  hotelCollection.saveFile('./hotels-list.json');

  res.status(201).json(hotel);
});

app.get('/hotels/:hotel_id', (req, res, next) => {
  let hotel = hotelCollection.getHotelFromSlug(req.params.hotel_id);
  if(!hotel) {
    res.status(404);
    return next(new Error('That hotel is not in our database!'));
  }

  res.status(200).json(hotel);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({code: 'not found'});
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.json({code: err.message});
  }
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!')
});