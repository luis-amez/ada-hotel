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

  /**
   * Return the average rating for the hotel
   * @return {number} - The average rating
   */
  rating() {
    let avgRating = 0;

    if(this.reviewCount() > 0) {
      let totalRating = this.reviews.reduce((acc, elem) => {
        return acc + elem.rating;
      });
      avgRating = totalRating / this.reviewCount();
    }

    return avgRating;
  }

  ratingAsStars() {
    let stars = '';

    for(let i = 0; i < Math.floor(this.rating()); i++) {
      stars += '⭐';
    }

    return stars;
  }
}

module.exports = Hotel;