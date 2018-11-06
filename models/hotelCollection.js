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
}

module.exports = HotelCollection;