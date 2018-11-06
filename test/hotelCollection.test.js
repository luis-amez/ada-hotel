const chai = require('chai');
const expect = chai.expect;

var HotelCollection = require('../models/hotelCollection')
var Hotel = require('../models/hotel')

describe('HotelCollection', function() {
  it('should initialize properly', () => {
    const hotelCollection = new HotelCollection();

    expect(hotelCollection.hotels).to.deep.equal([]);
  });

  it('should add hotels to the collection', () => {
    const hotelCollection = new HotelCollection();
    const hotel1 = new Hotel('Hilton Metropole', 'London');
    const hotel2 = new Hotel("Crown Plaza", "Leeds");
    hotelCollection.addHotel(hotel1);
    hotelCollection.addHotel(hotel2);

    expect(hotelCollection.hotels.length).to.equal(2);
    expect(hotelCollection.hotels).to.deep.equal([hotel1, hotel2]);
  });

  it('should throw an error if you try to overwrite hotels', () => {
    const hotelCollection = new HotelCollection();
    const hotel1 = new Hotel('Hilton Metropole', 'London');
    const hotel2 = new Hotel("Crown Plaza", "Leeds");
    hotelCollection.addHotel(hotel1);

    expect(() => { hotelCollection.hotels = [hotel2] }).to.throw('You can not overwrite hotels!'); 
  });
});