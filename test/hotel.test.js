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

  it('should take into account the hotel reviews for the averages', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');
    const review1 = new Review(5, 'Excellent hotel, very clean', '2018-12-17');
    const review2 = new Review(1, 'Terrible hotel, smelled of mice', '2018-01-01')
    hotel.addReview(review1);
    hotel.addReview(review2);

    expect(hotel.reviewCount()).to.equal(2);
    expect(hotel.rating()).to.equal(3);
    expect(hotel.ratingAsStars()).to.equal('⭐⭐⭐');
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

  it('should convert the hotel into a JSON string', () => {
    const hotel = new Hotel('Hilton Metropole', 'London');
    const review1 = new Review(5, 'Excellent hotel, very clean', '2018-12-17');
    const review2 = new Review(1, 'Terrible hotel, smelled of mice', '2018-01-01')
    hotel.addReview(review1);
    hotel.addReview(review2);
    const jsonString = '{"name":"Hilton Metropole","city":"London","reviewCount":2,"rating":3,' + 
      '"ratingAsStars":"⭐⭐⭐","urlSlug":"hilton_metropole_london","reviews":[{"rating":5,"text":' + 
      '"Excellent hotel, very clean","date":"2018-12-17T00:00:00.000Z","ratingAsStars":"⭐⭐⭐⭐⭐"},' + 
      '{"rating":1,"text":"Terrible hotel, smelled of mice","date":"2018-01-01T00:00:00.000Z","ratingAsStars":"⭐"}]}';

    expect(JSON.stringify(hotel)).to.equal(jsonString);
  });
});