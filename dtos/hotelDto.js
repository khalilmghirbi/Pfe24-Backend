class HotelDTO {
    constructor(data) {
      this.id = data.hotel_id|| ""; // Default to an empty string if `id` is not provided
      this.name = data.hotel_name || ""; // Default to an empty string if `name` is not provided
      this.rating = data.hotel_stars || 0; // Default to 0 if `rating` is not provided
      this.simpleRoom = data.hotel_singleroom || 0; // Default to 0 if `simpleRoom` is not provided
      this.doubleRoom = data.hotel_doubleroom || 0; // Default to 0 if `doubleRoom` is not provided
      this.url = data.hotel_link || ""; // Default to an empty string if `url` is not provided
      this.location = data.hotel_address || ""; // Default to an empty string if `location` is not provided
    }
  }
  
  module.exports = HotelDTO;
  
 