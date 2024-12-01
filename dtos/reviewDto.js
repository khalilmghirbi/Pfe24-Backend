class ReviewDTO {
    constructor(data) {
      this.id = data.hopitalavis_id || 0;
      this.receptionDate = data.receptionDate || new Date();
      this.patientName = data.hopitalavis_fullname || "";
      this.procedure = data.procedure_name || "";
      this.hospital = data.hopital_name || "";
      this.caseManager = data.hopitalmanager_fullname || "";
      this.message = data.hopitalavis_comment || "";
      this.rate = data.hopitalavis_moyenne_rate || 0;
      this.status = data.status || "pending"; // Default status if none provided
      this.reply = data.hopitalavis_reply || "";
      
    }
  }
  
  module.exports = ReviewDTO;
  