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

  /**
   * Returns an object with all the class properties plus the ratingAsStars as another property
   * @return {object} - The customized object
   */
  toJSON() {
    const rating = this.rating;
    const text = this.text;
    const date = this.date;
    const ratingAsStars = this.ratingAsStars();

    return {rating, text, date, ratingAsStars};
  }
}

module.exports = Review;