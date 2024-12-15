class ManagerDTO {
    constructor(data) {
      this.id = data.hopitalmanager_id; // Default to 0 if `id` is not provided
      this.name = data.hopitalmanager_fullname; // Default to an empty string if `name` is not provided
      this.email = data.hopitalmanager_email; // Default to an empty string if `email` is not provided
      this.phone = data.hopitalmanager_phone; // Default to an empty string if `phone` is not provided
      this.hopital = data.hopital_name; // Default to an empty string if `hopital` is not provided
      this.country = data.hopitalmanager_countries; // Default to an empty string if `country` is not provided
    }
  }
  
  module.exports = ManagerDTO;
  