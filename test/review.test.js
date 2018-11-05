const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('Review', function() {
  it('should initialize properly', () => {
    const review = new Review(5, 'Excellent hotel, very clean', '2018-12-17');

    expect(review.rating).to.equal(5);
    expect(review.text).to.equal('Excellent hotel, very clean');
    expect(review.date).to.eql(new Date('2018-12-17'));
  });

  it('should return a string of stars corresponding the rating', () => {
    const review = new Review(5, 'Excellent hotel, very clean', '2018-12-17');

    expect(review.ratingAsStars()).to.equal('⭐⭐⭐⭐⭐');
  });

  it('should return a empty string if the rating is 0', () => {
    const review = new Review(0, 'Worst hotel ever!', '2018-12-17');

    expect(review.ratingAsStars()).to.equal('');
  });

  it('should should round down the number of stars', () => {
    const review = new Review(3.5, 'Not bad', '2018-12-17');

    expect(review.ratingAsStars()).to.equal('⭐⭐⭐');
  });

  it('should convert the review into a JSON string', () => {
    const review = new Review(5, 'Excellent hotel, very clean', '2018-12-17');
    const jsonString = '{"rating":5,"text":"Excellent hotel, very clean","date":"2018-12-17T00:00:00.000Z","ratingAsStars":"⭐⭐⭐⭐⭐"}';

    expect(JSON.stringify(review)).to.equal(jsonString);
  });
});