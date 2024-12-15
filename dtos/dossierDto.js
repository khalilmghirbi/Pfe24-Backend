class DossierDTO {
  constructor(data) {
    this.Id = data.dossier_id || "";
    this.PatientName = data.client_nom || "";
    this.MedicalProcedure = data.list_procedures || "";
    this.ReceptionDate = data.dossier_datecreation || new Date();
    this.AnswerDate = data.dossier_rdv || new Date();
    this.CoordinatorName = data.username || "";
    this.CaseManagerName = data.hopitalmanager_fullname || "";
    this.Clinic = data.hopital_name || "";
    this.Country = data.country || "";
    this.Status = this.getStatusName(data.dossier_status); // Default status if none provided

    // Optional fields
    this.Age = data.client_age;
    this.Sex = data.client_sexe;
    this.DesiredCity = data.dossier_destination;//
    this.Smoker = data.client_smoker;
    this.NativeLanguage = data.user_lang;//
  }

  getStatusName(status) {
    switch (status) {
      case 0:
        return 'Awaiting';
      case -7:
        return 'Not available';
      case -3:
        return '"Inf. Rqsted';
      case -1:
        return 'Cancelled';
      case 6:
        return 'Quoted';
      case 1:
        return 'Confirmed';
      case 3:
        return 'Answered and Relaunched';
      case 2:
        return 'Answered';
      default:
        return 'Awaiting';
    }
  }
}

module.exports = DossierDTO;
