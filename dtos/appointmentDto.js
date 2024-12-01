class AppointmentDTO {
    constructor(data) {
      this.hospital = data.hopital_name || "";
      this.date = data.rdv_datetime || new Date();
      this.status = data.status || "pending"; // Default status if none provided
      this.payment = data.rdv_paid || 0;
      this.hotel = data.hotel_name || "";
    }
  }
  
  module.exports = AppointmentDTO;