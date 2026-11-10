let filieres = [
  { Fil_Id: 1, Fil_Code: 'DEV', Fil_Nom: 'Développement Digital', Fil_Niveau: 'Technicien Spécialisé' },
  { Fil_Id: 2, Fil_Code: 'INF', Fil_Nom: 'Infrastructure Digitale', Fil_Niveau: 'Technicien Spécialisé' },
  { Fil_Id: 3, Fil_Code: 'GE', Fil_Nom: 'Gestion des Entreprises', Fil_Niveau: 'Technicien Spécialisé' },
  { Fil_Id: 4, Fil_Code: 'CPT', Fil_Nom: 'Comptabilité', Fil_Niveau: 'Technicien Spécialisé' },
  { Fil_Id: 5, Fil_Code: 'ELT', Fil_Nom: 'Électricité', Fil_Niveau: 'Technicien' },
  { Fil_Id: 6, Fil_Code: 'COM', Fil_Nom: 'Commerce', Fil_Niveau: 'Technicien' },
  { Fil_Id: 7, Fil_Code: 'GC', Fil_Nom: 'Génie Civil', Fil_Niveau: 'Technicien' },
  { Fil_Id: 8, Fil_Code: 'HR', Fil_Nom: 'Hôtellerie et Restauration', Fil_Niveau: 'Technicien' },
]

let groupes = [
  { Grp_Id: 1, Grp_Code: 'DEV101', Fil_Id: 1, Grp_Annee: '2026 / 2027', Grp_Effectif: 30 },
  { Grp_Id: 2, Grp_Code: 'DEV102', Fil_Id: 1, Grp_Annee: '2026 / 2027', Grp_Effectif: 28 },
  { Grp_Id: 3, Grp_Code: 'DEV103', Fil_Id: 1, Grp_Annee: '2026 / 2027', Grp_Effectif: 28 },
  { Grp_Id: 4, Grp_Code: 'INF101', Fil_Id: 2, Grp_Annee: '2026 / 2027', Grp_Effectif: 22 },
  { Grp_Id: 5, Grp_Code: 'INF102', Fil_Id: 2, Grp_Annee: '2026 / 2027', Grp_Effectif: 21 },
  { Grp_Id: 6, Grp_Code: 'INF103', Fil_Id: 2, Grp_Annee: '2026 / 2027', Grp_Effectif: 21 },
  { Grp_Id: 7, Grp_Code: 'GE101', Fil_Id: 3, Grp_Annee: '2026 / 2027', Grp_Effectif: 24 },
  { Grp_Id: 8, Grp_Code: 'GE102', Fil_Id: 3, Grp_Annee: '2026 / 2027', Grp_Effectif: 24 },
  { Grp_Id: 9, Grp_Code: 'GE103', Fil_Id: 3, Grp_Annee: '2026 / 2027', Grp_Effectif: 24 },
  { Grp_Id: 10, Grp_Code: 'CPT102', Fil_Id: 4, Grp_Annee: '2026 / 2027', Grp_Effectif: 20 },
  { Grp_Id: 11, Grp_Code: 'CPT103', Fil_Id: 4, Grp_Annee: '2026 / 2027', Grp_Effectif: 19 },
  { Grp_Id: 12, Grp_Code: 'CPT104', Fil_Id: 4, Grp_Annee: '2026 / 2027', Grp_Effectif: 19 },
  { Grp_Id: 13, Grp_Code: 'ELT101', Fil_Id: 5, Grp_Annee: '2026 / 2027', Grp_Effectif: 24 },
  { Grp_Id: 14, Grp_Code: 'ELT102', Fil_Id: 5, Grp_Annee: '2026 / 2027', Grp_Effectif: 24 },
  { Grp_Id: 15, Grp_Code: 'COM101', Fil_Id: 6, Grp_Annee: '2026 / 2027', Grp_Effectif: 14 },
  { Grp_Id: 16, Grp_Code: 'COM102', Fil_Id: 6, Grp_Annee: '2026 / 2027', Grp_Effectif: 13 },
  { Grp_Id: 17, Grp_Code: 'COM103', Fil_Id: 6, Grp_Annee: '2026 / 2027', Grp_Effectif: 13 },
  { Grp_Id: 18, Grp_Code: 'GC101', Fil_Id: 7, Grp_Annee: '2026 / 2027', Grp_Effectif: 12 },
  { Grp_Id: 19, Grp_Code: 'GC102', Fil_Id: 7, Grp_Annee: '2026 / 2027', Grp_Effectif: 12 },
  { Grp_Id: 20, Grp_Code: 'HR101', Fil_Id: 8, Grp_Annee: '2026 / 2027', Grp_Effectif: 10 },
  { Grp_Id: 21, Grp_Code: 'HR102', Fil_Id: 8, Grp_Annee: '2026 / 2027', Grp_Effectif: 10 },
]

let matieres = [
  { Mat_Id: 1, Mat_Nom: 'Programmation Web' },
  { Mat_Id: 2, Mat_Nom: 'Base de données' },
  { Mat_Id: 3, Mat_Nom: 'Anglais technique' },
  { Mat_Id: 4, Mat_Nom: 'Algorithmique' },
  { Mat_Id: 5, Mat_Nom: 'Communication' },
  { Mat_Id: 6, Mat_Nom: 'Réseaux informatiques' },
  { Mat_Id: 7, Mat_Nom: 'Mathématiques' },
]

let stagiaires = [
  { Sta_Id: 1, Sta_CIN: 'JK112233', Sta_Nom: 'Ouali', Sta_Prenom: 'Hicham', Sta_Naissance: '2005-02-14', Sta_Sexe: 'M', Sta_Tel: '0652601815', Sta_Email: 'h.ouali@email.ma', Sta_Adresse: 'N° 75, Rue Al Massira, Sefrou', Grp_Id: 4 },
  { Sta_Id: 2, Sta_CIN: 'LM223344', Sta_Nom: 'Skalli', Sta_Prenom: 'Nada', Sta_Naissance: '2004-08-30', Sta_Sexe: 'F', Sta_Tel: '0630166131', Sta_Email: 'n.skalli@email.ma', Sta_Adresse: 'N° 71, Boulevard Zerktouni, Fès', Grp_Id: 3 },
  { Sta_Id: 3, Sta_CIN: 'NP334455', Sta_Nom: 'Berrada', Sta_Prenom: 'Anas', Sta_Naissance: '2005-05-09', Sta_Sexe: 'M', Sta_Tel: '0691390996', Sta_Email: 'a.berrada@email.ma', Sta_Adresse: 'N° 7, Avenue Hassan II, Fès', Grp_Id: 15 },
  { Sta_Id: 4, Sta_CIN: 'QR445566', Sta_Nom: 'Mernissi', Sta_Prenom: 'Zineb', Sta_Naissance: '2004-12-03', Sta_Sexe: 'F', Sta_Tel: '0682462819', Sta_Email: 'z.mernissi@email.ma', Sta_Adresse: 'N° 40, Rue des Mérinides, Fès', Grp_Id: 13 },
  { Sta_Id: 5, Sta_CIN: 'ST556677', Sta_Nom: 'Zniber', Sta_Prenom: 'Hamza', Sta_Naissance: '2005-01-27', Sta_Sexe: 'M', Sta_Tel: '0621993518', Sta_Email: 'h.zniber@email.ma', Sta_Adresse: 'N° 9, Rue des Mérinides, Fès', Grp_Id: 18 },
  { Sta_Id: 6, Sta_CIN: 'UV667788', Sta_Nom: 'Squalli', Sta_Prenom: 'Laila', Sta_Naissance: '2004-06-18', Sta_Sexe: 'F', Sta_Tel: '0693786579', Sta_Email: 'l.squalli@email.ma', Sta_Adresse: 'N° 59, Rue Ibn Khaldoun, Fès', Grp_Id: 20 },
  { Sta_Id: 7, Sta_CIN: 'WX778899', Sta_Nom: 'Kettani', Sta_Prenom: 'Meryem', Sta_Naissance: '2005-10-22', Sta_Sexe: 'F', Sta_Tel: '0632319487', Sta_Email: 'm.kettani@email.ma', Sta_Adresse: 'N° 44, Avenue des FAR, Meknès', Grp_Id: 10 },
  { Sta_Id: 8, Sta_CIN: 'YZ889900', Sta_Nom: 'Ouazzani', Sta_Prenom: 'Adil', Sta_Naissance: '2004-03-15', Sta_Sexe: 'M', Sta_Tel: '0649118625', Sta_Email: 'a.ouazzani@email.ma', Sta_Adresse: 'N° 20, Boulevard Zerktouni, Meknès', Grp_Id: 7 },
  { Sta_Id: 9, Sta_CIN: 'BC990011', Sta_Nom: 'Naciri', Sta_Prenom: 'Salim', Sta_Naissance: '2005-07-11', Sta_Sexe: 'M', Sta_Tel: '0601895559', Sta_Email: 's.naciri@email.ma', Sta_Adresse: 'N° 64, Rue des Mérinides, Fès', Grp_Id: 6 },
  { Sta_Id: 10, Sta_CIN: 'DE001122', Sta_Nom: 'Cherkaoui', Sta_Prenom: 'Lina', Sta_Naissance: '2004-09-05', Sta_Sexe: 'F', Sta_Tel: '0671147104', Sta_Email: 'l.cherkaoui@email.ma', Sta_Adresse: 'N° 83, Rue des Mérinides, Taza', Grp_Id: 2 },
  { Sta_Id: 11, Sta_CIN: 'FG112233', Sta_Nom: 'Alami', Sta_Prenom: 'Reda', Sta_Naissance: '2005-04-02', Sta_Sexe: 'M', Sta_Tel: '0674650752', Sta_Email: 'r.alami@email.ma', Sta_Adresse: 'N° 79, Rue Al Massira, Meknès', Grp_Id: 16 },
  { Sta_Id: 12, Sta_CIN: 'BK123456', Sta_Nom: 'Benali', Sta_Prenom: 'Youssef', Sta_Naissance: '2005-03-12', Sta_Sexe: 'M', Sta_Tel: '0612345678', Sta_Email: 'y.benali@email.ma', Sta_Adresse: 'N° 12, Rue Al Massira, Fès', Grp_Id: 1 },
  { Sta_Id: 13, Sta_CIN: 'AB234567', Sta_Nom: 'El Amrani', Sta_Prenom: 'Sara', Sta_Naissance: '2004-07-25', Sta_Sexe: 'F', Sta_Tel: '0603423667', Sta_Email: 's.elamrani@email.ma', Sta_Adresse: 'N° 11, Avenue Hassan II, Meknès', Grp_Id: 1 },
  { Sta_Id: 14, Sta_CIN: 'CD345678', Sta_Nom: 'Alaoui', Sta_Prenom: 'Karim', Sta_Naissance: '2005-11-02', Sta_Sexe: 'M', Sta_Tel: '0668426846', Sta_Email: 'k.alaoui@email.ma', Sta_Adresse: 'N° 46, Avenue des FAR, Meknès', Grp_Id: 5 },
  { Sta_Id: 15, Sta_CIN: 'EF456789', Sta_Nom: 'Idrissi', Sta_Prenom: 'Salma', Sta_Naissance: '2004-01-19', Sta_Sexe: 'F', Sta_Tel: '0632122330', Sta_Email: 's.idrissi@email.ma', Sta_Adresse: 'N° 63, Rue des Mérinides, Fès', Grp_Id: 9 },
  { Sta_Id: 16, Sta_CIN: 'GH567890', Sta_Nom: 'Bennani', Sta_Prenom: 'Omar', Sta_Naissance: '2005-09-08', Sta_Sexe: 'M', Sta_Tel: '0644026859', Sta_Email: 'o.bennani@email.ma', Sta_Adresse: 'N° 73, Rue Ibn Khaldoun, Fès', Grp_Id: 12 },
  { Sta_Id: 17, Sta_CIN: 'IJ678901', Sta_Nom: 'Tazi', Sta_Prenom: 'Imane', Sta_Naissance: '2004-05-30', Sta_Sexe: 'F', Sta_Tel: '0689078666', Sta_Email: 'i.tazi@email.ma', Sta_Adresse: 'N° 51, Rue Al Massira, Meknès', Grp_Id: 2 },
  { Sta_Id: 18, Sta_CIN: 'KL789012', Sta_Nom: 'Chraibi', Sta_Prenom: 'Mehdi', Sta_Naissance: '2005-12-14', Sta_Sexe: 'M', Sta_Tel: '0660313721', Sta_Email: 'm.chraibi@email.ma', Sta_Adresse: 'N° 44, Rue des Mérinides, Fès', Grp_Id: 5 },
  { Sta_Id: 19, Sta_CIN: 'MN890123', Sta_Nom: 'Lahlou', Sta_Prenom: 'Hind', Sta_Naissance: '2004-04-21', Sta_Sexe: 'F', Sta_Tel: '0610928159', Sta_Email: 'h.lahlou@email.ma', Sta_Adresse: 'N° 4, Rue Al Massira, Fès', Grp_Id: 9 },
  { Sta_Id: 20, Sta_CIN: 'OP901234', Sta_Nom: 'Fassi', Sta_Prenom: 'Nadia', Sta_Naissance: '2004-10-16', Sta_Sexe: 'F', Sta_Tel: '0639624595', Sta_Email: 'n.fassi@email.ma', Sta_Adresse: 'N° 61, Rue Al Massira, Fès', Grp_Id: 11 },
]

let absences = [
  { Abs_Id: 1, Sta_Id: 12, Mat_Id: 4, Abs_Date: '2026-10-13', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 2, Sta_Id: 12, Mat_Id: 1, Abs_Date: '2026-10-10', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 3, Sta_Id: 12, Mat_Id: 2, Abs_Date: '2026-10-09', Abs_Duree: 4, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 4, Sta_Id: 12, Mat_Id: 3, Abs_Date: '2026-10-07', Abs_Duree: 2, Abs_Type: 'Retard', Abs_Justifiee: true },
  { Abs_Id: 5, Sta_Id: 12, Mat_Id: 4, Abs_Date: '2026-10-02', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 6, Sta_Id: 12, Mat_Id: 5, Abs_Date: '2026-09-29', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 7, Sta_Id: 12, Mat_Id: 2, Abs_Date: '2026-09-25', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 8, Sta_Id: 12, Mat_Id: 1, Abs_Date: '2026-09-22', Abs_Duree: 4, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 9, Sta_Id: 12, Mat_Id: 6, Abs_Date: '2026-09-18', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 10, Sta_Id: 13, Mat_Id: 1, Abs_Date: '2026-10-13', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 11, Sta_Id: 14, Mat_Id: 6, Abs_Date: '2026-10-13', Abs_Duree: 4, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 12, Sta_Id: 15, Mat_Id: 5, Abs_Date: '2026-10-12', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
  { Abs_Id: 13, Sta_Id: 16, Mat_Id: 7, Abs_Date: '2026-10-12', Abs_Duree: 2, Abs_Type: 'Retard', Abs_Justifiee: true },
  { Abs_Id: 14, Sta_Id: 17, Mat_Id: 2, Abs_Date: '2026-10-08', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: false },
  { Abs_Id: 15, Sta_Id: 18, Mat_Id: 6, Abs_Date: '2026-10-06', Abs_Duree: 2, Abs_Type: 'Absence', Abs_Justifiee: true },
]

let notes = [
  { Not_Id: 1, Sta_Id: 12, Mat_Id: 1, Not_Valeur: 15, Not_Type: 'Contrôle' },
  { Not_Id: 2, Sta_Id: 12, Mat_Id: 2, Not_Valeur: 13.5, Not_Type: 'Examen' },
  { Not_Id: 3, Sta_Id: 12, Mat_Id: 3, Not_Valeur: 12, Not_Type: 'Contrôle' },
  { Not_Id: 4, Sta_Id: 12, Mat_Id: 4, Not_Valeur: 14, Not_Type: 'Examen' },
  { Not_Id: 5, Sta_Id: 12, Mat_Id: 5, Not_Valeur: 11, Not_Type: 'Contrôle' },
  { Not_Id: 6, Sta_Id: 13, Mat_Id: 1, Not_Valeur: 16, Not_Type: 'Contrôle' },
  { Not_Id: 7, Sta_Id: 13, Mat_Id: 2, Not_Valeur: 14, Not_Type: 'Examen' },
  { Not_Id: 8, Sta_Id: 17, Mat_Id: 1, Not_Valeur: 12.5, Not_Type: 'Contrôle' },
  { Not_Id: 9, Sta_Id: 17, Mat_Id: 4, Not_Valeur: 9.5, Not_Type: 'Examen' },
  { Not_Id: 10, Sta_Id: 14, Mat_Id: 6, Not_Valeur: 13, Not_Type: 'Contrôle' },
  { Not_Id: 11, Sta_Id: 14, Mat_Id: 7, Not_Valeur: 10.5, Not_Type: 'Examen' },
  { Not_Id: 12, Sta_Id: 16, Mat_Id: 7, Not_Valeur: 15, Not_Type: 'Examen' },
]

let users = [
  { id: 1, uname: 'admin@geststag.ma', upass: 'admin123', nom: 'Admin', role: 'administrateur' },
  { id: 2, uname: 'scolarite@geststag.ma', upass: 'pass2', nom: 'Service scolarité', role: 'scolarité' },
  { id: 3, uname: 'surveillant@geststag.ma', upass: 'pass3', nom: 'Surveillant général', role: 'surveillant' },
]

function getEffectifParFiliere(filieresData, groupesData, stagiairesData) {
  const effectifs = filieresData.map((filiere) => {
    const groupesFiliere = groupesData.filter((groupe) => groupe.Fil_Id === filiere.Fil_Id)
    const groupeIds = new Set(groupesFiliere.map((groupe) => groupe.Grp_Id))
    const effectif = stagiairesData.filter((stagiaire) => groupeIds.has(stagiaire.Grp_Id)).length

    return {
      name: filiere.Fil_Nom,
      effectif,
    }
  })
  const effectifMax = Math.max(...effectifs.map((filiere) => filiere.effectif), 0)

  return effectifs.map((filiere) => ({
    ...filiere,
    pourcentage: effectifMax > 0 ? Math.round((filiere.effectif / effectifMax) * 100) : 0,
  }))
}

function getDernieresAbsences(absencesData, stagiairesData, groupesData, limite = 5) {
  return absencesData
    .slice()
    .sort((a, b) => (
      new Date(b.Abs_Date) - new Date(a.Abs_Date)
      || b.Abs_Id - a.Abs_Id
    ))
    .slice(0, limite)
    .map((absence) => {
      const stagiaire = stagiairesData.find((item) => item.Sta_Id === absence.Sta_Id)
      const groupe = groupesData.find((item) => item.Grp_Id === stagiaire?.Grp_Id)

      return {
        id: absence.Abs_Id,
        stagiaire: stagiaire ? `${stagiaire.Sta_Prenom} ${stagiaire.Sta_Nom}` : 'Inconnu',
        groupe: groupe?.Grp_Code ?? '—',
        date: new Date(absence.Abs_Date).toLocaleDateString('fr-FR'),
        statut: absence.Abs_Justifiee ? 'Justifiée' : 'Non justifiée',
      }
    })
}

function supprimerStagiaire(stagiaireId) {
  const index = stagiaires.findIndex((stagiaire) => stagiaire.Sta_Id === stagiaireId)
  if (index === -1) return null

  const [stagiaireSupprime] = stagiaires.splice(index, 1)
  for (let absenceIndex = absences.length - 1; absenceIndex >= 0; absenceIndex -= 1) {
    if (absences[absenceIndex].Sta_Id === stagiaireId) absences.splice(absenceIndex, 1)
  }
  for (let noteIndex = notes.length - 1; noteIndex >= 0; noteIndex -= 1) {
    if (notes[noteIndex].Sta_Id === stagiaireId) notes.splice(noteIndex, 1)
  }

  return stagiaireSupprime
}

export {
  filieres,
  groupes,
  matieres,
  stagiaires,
  absences,
  notes,
  users,
  getEffectifParFiliere,
  getDernieresAbsences,
  supprimerStagiaire,
}
