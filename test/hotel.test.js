const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')
var Review = require('../models/review')

describe('Hotel', function() {
  it('should initialize properly', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');

    expect(hotel.name).to.equal('Hilton Metropole');
    expect(hotel.city).to.equal('London');
    expect(hotel.reviews).to.deep.equal([]);
  });

  it('should return 0 and empty string if there are no reviews', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');

    expect(hotel.reviewCount()).to.equal(0);
    expect(hotel.rating()).to.equal(0);
    expect(hotel.ratingAsStars()).to.equal('');
  });

  it('shoul return a url slug with the hotel name and city', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');

    expect(hotel.urlSlug()).to.equal('hilton_metropole_london');
  });

  it('should add a review to an hotel', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');
    const review = new Review(5, 'Excellent hotel, very clean', '2018-12-17');
    hotel.addReview(review);

    expect(hotel.reviews.length).to.equal(1);
    expect(hotel.reviews).to.deep.equal([review]);
  });
});