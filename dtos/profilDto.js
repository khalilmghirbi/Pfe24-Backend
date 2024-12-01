class ProfileDTO {
    constructor(data, services) {
      this.name = data.hopital_name || ""; // Default to an empty string if `name` is not provided
      this.image = data.hopital_logo || ""; // Default to an empty string if `image` is not provided
      this.address = data.hopital_adress || ""; // Default to an empty string if `address` is not provided
      this.city = data.hopital_city || ""; // Default to an empty string if `city` is not provided
      this.openingYear = data.openingYear || 0; // Default to 0 if `openingYear` is not provided
      this.capacity = data.hopital_nbrlits || 0; // Default to 0 if `capacity` is not provided
      this.priceWarrantyCertificate = data.hopital_certificat || 0; // Default to 0 if `priceWarrantyCertificate` is not provided
      this.phone = data.hopital_tel || ""; // Default to an empty string if `phone` is not provided
      this.services = services || []; // Ensure `services` is an array
    }
  }
  
  module.exports = ProfileDTO;
       