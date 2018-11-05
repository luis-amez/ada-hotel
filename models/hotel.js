class Hotel {
  /**
   * Hotel constructor
   * @param {*} name - Hotel name
   * @param {*} city - City where the hotel is located
   * @return {Hotel} - An instance of Hotel class
   */
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.reviews = [];
  }

  /**
   * Returns how many reviews the hotel has
   * @return {number} - The number of reviews for the hotel
   */
  reviewCount() {
    return this.reviews.length;
  }

  /**
   * Returns the average rating for the hotel
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

  /**
   * Returns a representation of the hotel rating using stars
   * @return {string} - A string with as many stars as the hotel rating
   */
  ratingAsStars() {
    let stars = '';

    for(let i = 0; i < Math.floor(this.rating()); i++) {
      stars += '⭐';
    }

    return stars;
  }

  /**
   * Returns a valid string to include in the url
   * @return {string} - A string without spaces made with hotel name and city
   */
  urlSlug() {
    let lowCaseName = this.name.toLowerCase();
    let lowCaseCity = this.city.toLowerCase();
    let slug = lowCaseName.split(' ').join('_') + '_' + lowCaseCity;

    return slug;
  }
}

module.exports = Hotel;