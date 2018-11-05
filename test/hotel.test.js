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
});