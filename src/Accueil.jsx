import './Accueil.css'
import {
  filieres,
  groupes,
  stagiaires,
  absences,
  getEffectifParFiliere,
  getDernieresAbsences,
} from './data'

const navItems = ['Accueil', 'Stagiaires', 'Filières', 'Absences', 'Notes', 'Utilisateurs']

function Accueil({ onNavigate }) {
  const totalStagiaires = stagiaires.length
  const totalFilieres = filieres.length
  const totalGroupes = groupes.length
  const totalAbsencesToday = absences.filter((item) => item.Abs_Date === '2026-10-13').length

  const stats = [
    { value: totalStagiaires.toString(), label: 'Stagiaires inscrits', accent: 'blue' },
    { value: totalFilieres.toString(), label: 'Filières', accent: 'green' },
    { value: totalGroupes.toString(), label: 'Groupes', accent: 'orange' },
    { value: totalAbsencesToday.toString(), label: 'Absences aujourd\'hui', accent: 'red' },
  ]

  const filiereStats = getEffectifParFiliere(filieres, groupes, stagiaires)
  const maxEffectifFiliere = Math.max(...filiereStats.map((filiere) => filiere.effectif), 1)

  const lastAbsences = getDernieresAbsences(absences, stagiaires, groupes)

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" aria-label="Logo GestStag">
            <div className="brand-mark">G</div>
            <span className="brand-text">GestStag</span>
          </div>

          <nav className="main-nav" aria-label="Navigation principale">
            {navItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={index === 0 ? 'nav-item active' : 'nav-item'}
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

      <main className="dashboard-main">
        <div className="page-header">
          <h1>Tableau de bord</h1>
          <span>Accueil / Tableau de bord</span>
        </div>

        <section className="stats-grid" aria-label="Statistiques principales">
          {stats.map((stat) => {
            const targetPage = stat.label === 'Stagiaires inscrits' ? 'Stagiaires' : stat.label === 'Filières' ? 'Filières' : stat.label === 'Groupes' ? 'Stagiaires' : 'Absences'

            return (
              <article key={stat.label} className={`stat-card ${stat.accent}`}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <button type="button" className="stat-link-button" onClick={() => onNavigate(targetPage)}>
                  Voir la liste
                </button>
              </article>
            )
          })}
        </section>

        <section className="content-grid">
          <article className="panel filiere-panel">
            <h2>Effectif par filière</h2>
            <div className="filiere-list">
              {filiereStats.map((filiere) => (
                <div key={filiere.name} className="filiere-row">
                  <div className="filiere-name">{filiere.name}</div>
                  <div
                    className="filiere-bar-wrap"
                    role="progressbar"
                    aria-label={`Effectif de la filière ${filiere.name}`}
                    aria-valuenow={filiere.effectif}
                    aria-valuemin="0"
                    aria-valuemax={maxEffectifFiliere}
                  >
                    <span className="filiere-bar" style={{ width: `${filiere.pourcentage}%` }} />
                  </div>
                  <span className="filiere-value">{filiere.effectif}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel absences-panel">
            <h2>Dernières absences</h2>
            <table>
              <thead>
                <tr>
                  <th>Stagiaire</th>
                  <th>Groupe</th>
                  <th>Date</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {lastAbsences.length > 0 ? (
                  lastAbsences.map((absence) => (
                    <tr key={absence.id}>
                      <td>{absence.stagiaire}</td>
                      <td>{absence.groupe}</td>
                      <td>{absence.date}</td>
                      <td>
                        <span className={`status ${absence.statut === 'Justifiée' ? 'justified' : 'unjustified'}`}>
                          {absence.statut}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Aucune absence enregistrée.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </article>
        </section>

        <section className="quick-actions" aria-label="Accès rapides">
          <button type="button" className="action-btn primary" onClick={() => onNavigate('Ajouter')}>
            <span className="action-inner">+ Ajouter un stagiaire</span>
          </button>
          <button type="button" className="action-btn orange" onClick={() => onNavigate('Absences')}>
            <span className="action-inner">Saisir les absences</span>
          </button>
          <button type="button" className="action-btn blue" onClick={() => onNavigate('Filières')}>
            <span className="action-inner">Importer (Excel)</span>
          </button>
          <button type="button" className="action-btn gray" onClick={() => onNavigate('Utilisateurs')}>
            <span className="action-inner">Exporter la liste (PDF)</span>
          </button>
        </section>
      </main>
    </div>
  )
}

export default Accueil