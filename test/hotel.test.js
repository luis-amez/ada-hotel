const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {
  it('should initialize properly', () => {
    const hotel = new Hotel("Hilton Metropole", "London");

    expect(hotel.name).to.equal('Hilton Metropole');
    expect(hotel.city).to.equal('London');
    expect(hotel.reviews).to.deep.equal([]);
  });

  it('should return 0 and empty string if there are no reviews', () => {
    const hotel = new Hotel("Hilton Metropole", "London");

    expect(hotel.reviewCount()).to.equal(0);
    expect(hotel.rating()).to.equal(0);
    expect(hotel.ratingAsStars()).to.equal('');
  });
});