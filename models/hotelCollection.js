class HotelCollection {
  constructor() {
    this._hotels = [];
  }

  addHotel(hotel) {
    this._hotels.push(hotel);
  }

  get hotels() {
    return this._hotels;
  }

  set hotels(_) {
    throw new Error('You can not overwrite hotels!'); 
  }

  saveFile(path) {
    const fs = require('fs');

    let arrayOfJSON = this.hotels.map((hotel) => {
      return hotel.toJSON();
    });
    let jsonString = JSON.stringify(arrayOfJSON, null, 2);

    fs.writeFileSync(path, jsonString, 'utf-8');
  }

  static load(path) {
    const fs = require('fs');
    const Hotel = require('./hotel');
    const Review = require('./review');

    let fileContents = fs.readFileSync(path, 'utf-8');
    let data = JSON.parse(fileContents);
    let hotelCollection = new HotelCollection();
    data.forEach((hotelInfo) => {
      let hotel = new Hotel(hotelInfo.name, hotelInfo.city);
      hotelInfo.reviews.forEach((reviewInfo) => {
        let review = new Review(reviewInfo.rating, reviewInfo.text, reviewInfo.date.toString());
        hotel.addReview(review);
      });
      hotelCollection.addHotel(hotel);
    })
    
    return hotelCollection;
  }
}

module.exports = HotelCollection;