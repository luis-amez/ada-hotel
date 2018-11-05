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
}

module.exports = Review;