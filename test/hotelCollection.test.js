const chai = require('chai');
const expect = chai.expect;

const HotelCollection = require('../models/hotelCollection');
const Hotel = require('../models/hotel');
const Review = require('../models/review');

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

  it('should save the collection into a file and be able to retrieve it', ()=> {
    const hotelCollection = new HotelCollection();
    const hotel1 = new Hotel('Hilton Metropole', 'London');
    const hotel2 = new Hotel("Crown Plaza", "Leeds");
    hotelCollection.addHotel(hotel1);
    hotelCollection.addHotel(hotel2);
    const review1 = new Review(5, 'Excellent hotel, very clean', '2018-12-17');
    const review2 = new Review(1, 'Terrible hotel, smelled of mice', '2018-01-01')
    hotel1.addReview(review1);
    hotel1.addReview(review2);
    hotelCollection.saveFile('./hotels-list.json')
    const loadedHotelCollection = HotelCollection.load('./hotels-list.json')

    expect(loadedHotelCollection instanceof HotelCollection).to.equal(true);
    expect(loadedHotelCollection.hotels.length).to.equal(2);
    expect(loadedHotelCollection.hotels).to.deep.equal([hotel1, hotel2]);
  })
});