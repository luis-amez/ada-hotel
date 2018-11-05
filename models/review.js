class Review {
  /**
   * Review constructor
   * @param {number} rating - Numerical score from 1 to 5 for the reviewed hotel 
   * @param {string} text - User text feedback about the hotel
   * @param {date} date - Date when the review is written
   */
  constructor(rating, text, date) {
    this.rating = rating;
    this.text = text;
    this.date = new Date(date);
  }

  /**
   * Returns a representation of the review rating using stars
   * @return {string} - A string with as many stars as the review rating
   */
  ratingAsStars() {
    let stars = '';

    for(let i = 0; i < Math.floor(this.rating); i++) {
      stars += '⭐';
    }

    return stars;
  }
}

module.exports = Review;