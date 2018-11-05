class Hotel {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.reviews = [];
  }

  /**
   * Return how many reviews the hotel has
   * @return {number} - The number of reviews for the hotel
   */
  reviewCount() {
    return this.reviews.length;
  }
}

module.exports = Hotel;