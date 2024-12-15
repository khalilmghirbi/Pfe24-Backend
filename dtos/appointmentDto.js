class AppointmentDTO {
    constructor(data) {
      this.hospital = data.hopital_name || "";
      this.date = data.rdv_datetime;
      this.status = this.getStatusName(data.rdv_confirmed); // Default status if none provided
      this.payment = data.rdv_paid || 0;
      this.hotel = data.hotel_name || "";
    }

    getStatusName(confirmed) {
      switch (confirmed) {
        case 0:
          return 'new';
        case -1:
          return 'rejected';
        case 1:
          return 'confirmed';
        default:
          return 'new';
      }
    }
  }
  
  module.exports = AppointmentDTO;