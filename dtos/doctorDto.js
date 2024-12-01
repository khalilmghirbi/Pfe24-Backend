class DoctorDTO {
    constructor(data) {
      this.id = data.hopitalmedecins_id || ""; // Default to an empty string if `id` is not provided
      this.name = data.hopitalmedecins_fullname || ""; // Default to an empty string if `name` is not provided
      this.photo = data.hopitalmedecins_photo || null; // Optional field with default as `null`
      this.cv = data.hopitalmedecins_cvfile || null; // Optional field with default as `null`
      this.specialities = Array.isArray(data.procedure_name) ? data.procedure_name : []; // Ensure it's an array
      this.languages = Array.isArray(data.hopitalmedecins_langs) ? data.hopitalmedecins_langs : []; // Ensure it's an array
    }
  }
  
  module.exports = DoctorDTO;
 