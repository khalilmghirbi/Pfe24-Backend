class ContactDTO {
    constructor(data) {
      this.id = data.hopitalcontacts_id || ""; // Default to an empty string if `id` is not provided
      this.name = data.hopitalcontacts_fullname || ""; // Default to an empty string if `name` is not provided
      this.email = data.hopitalcontacts_email || ""; // Default to an empty string if `email` is not provided
    }
  }
  
  module.exports = ContactDTO;