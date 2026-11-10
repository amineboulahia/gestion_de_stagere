import { useState } from 'react'
import './Stagiers.css'
import { stagiaires, groupes, filieres, supprimerStagiaire } from './data'

function Stagiers({ onNavigate }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFiliere, setSelectedFiliere] = useState('')
  const [selectedGroupe, setSelectedGroupe] = useState('')
  const [notice, setNotice] = useState('')

  const rows = stagiaires.map((stagiaire) => {
    const groupe = groupes.find((item) => item.Grp_Id === stagiaire.Grp_Id)
    const filiere = filieres.find((item) => item.Fil_Id === groupe?.Fil_Id)

    return {
      id: stagiaire.Sta_Id,
      cin: stagiaire.Sta_CIN,
      nom: stagiaire.Sta_Nom,
      prenom: stagiaire.Sta_Prenom,
      filiereId: groupe?.Fil_Id,
      groupeId: groupe?.Grp_Id,
      filiere: filiere ? filiere.Fil_Nom : '—',
      groupe: groupe ? groupe.Grp_Code : '—',
      date: stagiaire.Sta_Naissance.split('-').reverse().join('/'),
    }
  })

  const availableGroupes = groupes.filter((groupe) => (
    !selectedFiliere || String(groupe.Fil_Id) === selectedFiliere
  ))

  const filteredRows = rows.filter((stagiaire) => {
    const normalizedSearch = searchTerm.toLocaleLowerCase('fr')
    const exactMatch = !normalizedSearch || [
      stagiaire.cin,
      stagiaire.nom,
      stagiaire.prenom,
      `${stagiaire.prenom} ${stagiaire.nom}`,
      `${stagiaire.nom} ${stagiaire.prenom}`,
    ].some((value) => value.toLocaleLowerCase('fr') === normalizedSearch)

    return exactMatch
      && (!selectedFiliere || String(stagiaire.filiereId) === selectedFiliere)
      && (!selectedGroupe || String(stagiaire.groupeId) === selectedGroupe)
  })

  function handleSearch(event) {
    event.preventDefault()
    setSearchTerm(searchInput.trim())
  }

  function resetFilters() {
    setSearchInput('')
    setSearchTerm('')
    setSelectedFiliere('')
    setSelectedGroupe('')
  }

  function handleDelete(stagiaireId) {
    const stagiaire = stagiaires.find((item) => item.Sta_Id === stagiaireId)
    if (!stagiaire) return
    const confirmed = window.confirm(
      `Supprimer ${stagiaire.Sta_Prenom} ${stagiaire.Sta_Nom} ? Ses absences et ses notes seront également supprimées.`,
    )
    if (!confirmed) return

    const deletedStagiaire = supprimerStagiaire(stagiaireId)
    if (deletedStagiaire) {
      setNotice(`${deletedStagiaire.Sta_Prenom} ${deletedStagiaire.Sta_Nom} et ses absences et notes ont été supprimés.`)
    }
  }

  return (
    <div className="stagiaires-page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" aria-label="Logo GestStag">
            <div className="brand-mark">G</div>
            <span className="brand-text">GestStag</span>
          </div>

          <nav className="main-nav" aria-label="Navigation principale">
            {[ 'Accueil', 'Stagiaires', 'Filières', 'Absences', 'Notes', 'Utilisateurs' ].map((item) => (
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

      <main className="stagiaires-main">
        <div className="page-header">
          <h1>Liste des stagiaires</h1>
          <span>Accueil / Stag</span>
        </div>

        <section className="toolbar-panel">
          <form className="filters" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Nom, prénom ou CIN..."
              className="search-input"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />

            <select
              value={selectedFiliere}
              className="select-input"
              onChange={(event) => {
                setSelectedFiliere(event.target.value)
                setSelectedGroupe('')
              }}
            >
              <option value="">Toutes les filières</option>
              {filieres.map((filiere) => (
                <option key={filiere.Fil_Id} value={filiere.Fil_Id}>{filiere.Fil_Nom}</option>
              ))}
            </select>

            <select
              value={selectedGroupe}
              className="select-input"
              onChange={(event) => setSelectedGroupe(event.target.value)}
            >
              <option value="">Tous les groupes</option>
              {availableGroupes.map((groupe) => (
                <option key={groupe.Grp_Id} value={groupe.Grp_Id}>{groupe.Grp_Code}</option>
              ))}
            </select>

            <button type="submit" className="btn-search">Rechercher</button>
            <button type="button" className="btn-reset" onClick={resetFilters}>Réinitialiser</button>
          </form>

          <button type="button" className="btn-add" onClick={() => onNavigate('Ajouter')}>+ Ajouter</button>
        </section>

        {notice && <p className="action-notice" role="status">{notice}</p>}

        <section className="table-panel">
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>CIN</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Filière</th>
                <th>Groupe</th>
                <th>Date de naissance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan="8" className="empty-results">Aucun stagiaire ne correspond exactement à la recherche.</td>
                </tr>
              )}
              {filteredRows.map((stagiaire, index) => (
                <tr key={stagiaire.cin}>
                  <td>{index + 1}</td>
                  <td>{stagiaire.cin}</td>
                  <td>{stagiaire.nom}</td>
                  <td>{stagiaire.prenom}</td>
                  <td>{stagiaire.filiere}</td>
                  <td>{stagiaire.groupe}</td>
                  <td>{stagiaire.date}</td>
                  <td className="actions-cell">
                    <button
                      type="button"
                      className="icon-btn view"
                      aria-label={`Voir ${stagiaire.prenom} ${stagiaire.nom}`}
                      title="Voir"
                      onClick={() => onNavigate('Fiche stagiaire', stagiaire.id)}
                    >◉</button>
                    <button
                      type="button"
                      className="icon-btn edit"
                      aria-label={`Modifier ${stagiaire.prenom} ${stagiaire.nom}`}
                      title="Modifier"
                      onClick={() => onNavigate('Modifier', stagiaire.id)}
                    >✎</button>
                    <button
                      type="button"
                      className="icon-btn delete"
                      aria-label={`Supprimer ${stagiaire.prenom} ${stagiaire.nom}`}
                      title="Supprimer"
                      onClick={() => handleDelete(stagiaire.id)}
                    >🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer className="table-footer">
          <div className="export-actions">
            <button type="button" className="small-btn">Exporter PDF</button>
            <button type="button" className="small-btn">Exporter Excel</button>
          </div>

          <div className="pagination">
            <span>{filteredRows.length} résultat(s) trouvé(s)</span>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default Stagiers
