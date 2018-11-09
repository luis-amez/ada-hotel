class HotelCollection {
  /**
   * HotelCollection constructor
   * @return {HotelCollection} - A list to store and manage hotels
   */
  constructor() {
    this._hotels = [];
  }

  /**
   * Add an hotel to the collection
   * @param {Hotel} - The hotel to be added 
   */
  addHotel(hotel) {
    this._hotels.push(hotel);
  }

  /**
   * Returns all the hotels into the collection
   * @return {[Hotels]} - And array with all the hotels in the collection
   */
  get hotels() {
    return this._hotels;
  }

  /**
   * This method blocks the user to be able to access directly the 'fake' attribute 
   * hotels avoiding that way they can overwrite the list of hotels
   */
  set hotels(_) {
    throw new Error('You can not overwrite hotels!'); 
  }

  /**
   * Saves the collection in a file
   * @param {string} - The path in the system to store the file
   */
  saveFile(path) {
    const fs = require('fs');

    let arrayOfJSON = this.hotels.map((hotel) => {
      return hotel.toJSON();
    });
    let jsonString = JSON.stringify(arrayOfJSON, null, 2);

    fs.writeFileSync(path, jsonString, 'utf-8');
  }

  /**
   * Returns a new HotelCollection instance with information previously saved
   * @param {string} path - The path for retrieving the collection from a file
   * @returns {HotelCollection} - The collection with the data saved
   */
  static load(path) {
    const fs = require('fs');
    const Hotel = require('./hotel');
    const Review = require('./review');

    let fileContents = fs.readFileSync(path, 'utf-8');
    let data = JSON.parse(fileContents);
    let hotelCollection = new HotelCollection();
    data.forEach((hotelInfo) => {
      let hotel = new Hotel(hotelInfo.name, hotelInfo.city);
      hotelInfo.reviews.forEach((reviewInfo) => {
        let review = new Review(reviewInfo.rating, reviewInfo.text, reviewInfo.date.toString());
        hotel.addReview(review);
      });
      hotelCollection.addHotel(hotel);
    })

    return hotelCollection;
  }

  getHotelFromSlug(slug) {
    return this.hotels.find((hotel) => {
      return hotel.urlSlug() === slug;
    })
  }

  deleteHotelFromSlug(slug) {
    let hotel = this.getHotelFromSlug(slug)
    let indexOfHotel = this.hotels.indexOf(hotel)

    this.hotels.splice(indexOfHotel, 1)

    return hotel
  }
}

module.exports = HotelCollection;