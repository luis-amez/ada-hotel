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
});