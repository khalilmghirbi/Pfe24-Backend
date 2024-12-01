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
      this.Country = data. country || "";
      this.Status = data.dossier_status || "open"; // Default status if none provided
  
      // Optional fields
      this.Age = data.client_age;
      this.Sex = data.client_sexe;
      this.DesiredCity = data.dossier_destination;//
      this.Smoker = data.client_smoker;
      this.NativeLanguage = data.user_lang;//
    }
  }
  
  module.exports = DossierDTO;
  