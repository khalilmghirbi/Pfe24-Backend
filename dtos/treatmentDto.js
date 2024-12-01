class TreatmentDTO {
    constructor(data) {
      this.name = data.procedure_name || ""; // Default to an empty string if `name` is not provided
      this.capacity = data.procedure_minmax || 0; // Default to 0 if `capacity` is not provided
    }
  }
  
  module.exports = TreatmentDTO;
  