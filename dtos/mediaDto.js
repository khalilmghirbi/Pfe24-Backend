class MediaDTO {
    constructor(data) {
      this.id = data.hopital_photos_id;
      this.desc = data.photo_desc; // Default to an empty string if `name` is not provided
      this.path = data.photo_path; // Default to an empty string if `image` is not provided
      this.language = Array.isArray(data.photo_lang) ? data.photo_lang : [data.photo_lang]; // Ensure it's an array
    }
  }
  
  module.exports = MediaDTO;
  