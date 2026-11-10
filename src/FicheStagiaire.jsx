import { useState } from 'react'
import './FicheStagiaire.css'
import { absences, filieres, groupes, matieres, notes, stagiaires, supprimerStagiaire } from './data'

const navItems = ['Accueil', 'Stagiaires', 'Filières', 'Absences', 'Notes', 'Utilisateurs']

function formatDate(date) {
  return date ? date.split('-').reverse().join('/') : '—'
}

function FicheStagiaire({ stagiaireId, onNavigate }) {
  const [activeTab, setActiveTab] = useState('Informations')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const stagiaire = stagiaires.find((item) => item.Sta_Id === stagiaireId)

  if (!stagiaire) {
    return (
      <div className="student-profile-page">
        <main className="student-profile-main">
          <p className="profile-notice" role="alert">Ce stagiaire n’existe plus.</p>
          <button type="button" className="profile-back" onClick={() => onNavigate('Stagiaires')}>
            Retour à la liste
          </button>
        </main>
      </div>
    )
  }

  const groupe = groupes.find((item) => item.Grp_Id === stagiaire.Grp_Id)
  const filiere = filieres.find((item) => item.Fil_Id === groupe?.Fil_Id)
  const annee = groupe?.Grp_Annee ?? '—'
  const stagiaireAbsences = absences
    .filter((item) => item.Sta_Id === stagiaire.Sta_Id)
    .slice()
    .sort((a, b) => new Date(b.Abs_Date) - new Date(a.Abs_Date))
  const stagiaireNotes = notes.filter((item) => item.Sta_Id === stagiaire.Sta_Id)
  const absencesJustifiees = stagiaireAbsences.filter((item) => item.Abs_Justifiee).length
  const absencesNonJustifiees = stagiaireAbsences.length - absencesJustifiees

  function deleteStagiaire() {
    const deletedStagiaire = supprimerStagiaire(stagiaire.Sta_Id)
    if (deletedStagiaire) onNavigate('Stagiaires')
  }

  return (
    <div className="student-profile-page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" aria-label="Logo GestStag">
            <div className="brand-mark">G</div>
            <span className="brand-text">GestStag</span>
          </div>
          <nav className="main-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={item === 'Stagiaires' ? 'nav-item active' : 'nav-item'}
                onClick={() => onNavigate(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="user-menu">
            <span className="user-badge">AD</span>
            <span className="user-label">Admin</span>
            <button type="button" className="logout-btn">Déconnexion</button>
          </div>
        </div>
      </header>

      <main className="student-profile-main">
        <div className="page-header">
          <h1>Fiche du stagiaire</h1>
          <span>Accueil / Stagiaires / {stagiaire.Sta_Prenom} {stagiaire.Sta_Nom}</span>
        </div>

        <div className="student-profile-layout">
          <aside className="student-card">
            <div className="student-avatar" aria-hidden="true">
              {stagiaire.Sta_Prenom.charAt(0)}{stagiaire.Sta_Nom.charAt(0)}
            </div>
            <h2>{stagiaire.Sta_Prenom} {stagiaire.Sta_Nom}</h2>
            <p className="student-course">{filiere?.Fil_Nom ?? 'Filière inconnue'} · {groupe?.Grp_Code ?? 'Groupe inconnu'}</p>

            <dl className="student-summary">
              <div><dt>CIN</dt><dd>{stagiaire.Sta_CIN}</dd></div>
              <div><dt>Date de naissance</dt><dd>{formatDate(stagiaire.Sta_Naissance)}</dd></div>
              <div><dt>Téléphone</dt><dd>{stagiaire.Sta_Tel || '—'}</dd></div>
              <div><dt>E-mail</dt><dd>{stagiaire.Sta_Email || '—'}</dd></div>
              <div><dt>Année</dt><dd>{annee}</dd></div>
            </dl>

            <div className="student-actions">
              <button type="button" className="profile-edit" onClick={() => onNavigate('Modifier', stagiaire.Sta_Id)}>
                Modifier
              </button>
              <button type="button" className="profile-delete" onClick={() => setConfirmDelete(true)}>
                Supprimer
              </button>
              <button type="button" className="profile-back" onClick={() => onNavigate('Stagiaires')}>
                Retour à la liste
              </button>
            </div>
          </aside>

          <section className="student-record">
            <div className="profile-tabs" role="tablist" aria-label="Informations du stagiaire">
              {['Informations', 'Absences', 'Notes'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={activeTab === tab ? 'profile-tab active' : 'profile-tab'}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}{tab === 'Absences' ? ` (${stagiaireAbsences.length})` : ''}
                </button>
              ))}
            </div>

            {activeTab === 'Informations' && (
              <dl className="profile-information">
                <div><dt>Nom</dt><dd>{stagiaire.Sta_Nom}</dd></div>
                <div><dt>Prénom</dt><dd>{stagiaire.Sta_Prenom}</dd></div>
                <div><dt>Sexe</dt><dd>{stagiaire.Sta_Sexe === 'F' ? 'Féminin' : 'Masculin'}</dd></div>
                <div><dt>Filière</dt><dd>{filiere?.Fil_Nom ?? '—'}</dd></div>
                <div><dt>Groupe</dt><dd>{groupe?.Grp_Code ?? '—'}</dd></div>
                <div><dt>Adresse</dt><dd>{stagiaire.Sta_Adresse || '—'}</dd></div>
              </dl>
            )}

            {activeTab === 'Absences' && (
              <>
                <div className="attendance-summary">
                  <article><strong>{stagiaireAbsences.length}</strong><span>Absences enregistrées</span></article>
                  <article className="attendance-good"><strong>{absencesJustifiees}</strong><span>Justifiées</span></article>
                  <article className="attendance-warning"><strong>{absencesNonJustifiees}</strong><span>Non justifiées</span></article>
                </div>
                <div className="profile-table-wrap">
                  <table className="profile-table">
                    <thead><tr><th>Date</th><th>Matière</th><th>Durée</th><th>Type</th><th>Justification</th></tr></thead>
                    <tbody>
                      {stagiaireAbsences.length ? stagiaireAbsences.map((absence) => {
                        const matiere = matieres.find((item) => item.Mat_Id === absence.Mat_Id)
                        return (
                          <tr key={absence.Abs_Id}>
                            <td>{formatDate(absence.Abs_Date)}</td>
                            <td>{matiere?.Mat_Nom ?? '—'}</td>
                            <td>{absence.Abs_Duree} h</td>
                            <td>{absence.Abs_Type}</td>
                            <td><span className={absence.Abs_Justifiee ? 'record-status justified' : 'record-status unjustified'}>{absence.Abs_Justifiee ? 'Justifiée' : 'Non justifiée'}</span></td>
                          </tr>
                        )
                      }) : <tr><td colSpan="5" className="profile-empty">Aucune absence enregistrée.</td></tr>}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === 'Notes' && (
              <div className="profile-table-wrap">
                <table className="profile-table">
                  <thead><tr><th>Matière</th><th>Note / 20</th><th>Évaluation</th></tr></thead>
                  <tbody>
                    {stagiaireNotes.length ? stagiaireNotes.map((note) => {
                      const matiere = matieres.find((item) => item.Mat_Id === note.Mat_Id)
                      return <tr key={note.Not_Id}><td>{matiere?.Mat_Nom ?? '—'}</td><td>{note.Not_Valeur}</td><td>{note.Not_Type}</td></tr>
                    }) : <tr><td colSpan="3" className="profile-empty">Aucune note enregistrée.</td></tr>}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>

      {confirmDelete && (
        <div className="delete-confirm-overlay" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setConfirmDelete(false)
        }}>
          <section className="delete-confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-title">
            <header><h2 id="delete-title">Confirmation de suppression</h2><button type="button" aria-label="Fermer" onClick={() => setConfirmDelete(false)}>×</button></header>
            <p>Voulez-vous vraiment supprimer le stagiaire « {stagiaire.Sta_Prenom} {stagiaire.Sta_Nom} » ? Ses absences et ses notes seront également supprimées. Cette action est irréversible.</p>
            <footer>
              <button type="button" className="cancel-delete" onClick={() => setConfirmDelete(false)}>Annuler</button>
              <button type="button" className="confirm-delete" onClick={deleteStagiaire}>Oui, supprimer</button>
            </footer>
          </section>
        </div>
      )}
    </div>
  )
}

export default FicheStagiaire
