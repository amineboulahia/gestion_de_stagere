import { useState } from 'react'
import Accueil from './Accueil'
import Stagiers from './Stagiers'
import Ajouter from './ajouter'
import FicheStagiaire from './FicheStagiaire'

const navItems = ['Accueil', 'Stagiaires', 'Filières', 'Absences', 'Notes', 'Utilisateurs']

function PlaceholderPage({ title, onNavigate }) {
  return (
    <div className="placeholder-page">
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
                className={item === title ? 'nav-item active' : 'nav-item'}
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

      <main className="placeholder-main">
        <h1>{title}</h1>
        <p>Cette page est prête à être complétée.</p>
      </main>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('Accueil')
  const [selectedStagiaireId, setSelectedStagiaireId] = useState(null)
  const [editReturnPage, setEditReturnPage] = useState('Stagiaires')

  function navigate(nextPage, stagiaireId) {
    if (nextPage === 'Modifier') setEditReturnPage(page)
    if (stagiaireId !== undefined) setSelectedStagiaireId(stagiaireId)
    setPage(nextPage)
  }

  const renderPage = () => {
    switch (page) {
      case 'Accueil':
        return <Accueil onNavigate={navigate} />
      case 'Stagiaires':
        return <Stagiers onNavigate={navigate} />
      case 'Ajouter':
        return <Ajouter onNavigate={navigate} />
      case 'Modifier':
        return (
          <Ajouter
            onNavigate={navigate}
            mode="edit"
            stagiaireId={selectedStagiaireId}
            returnPage={editReturnPage}
          />
        )
      case 'Fiche stagiaire':
        return (
          <FicheStagiaire
            stagiaireId={selectedStagiaireId}
            onNavigate={navigate}
          />
        )
      case 'Filières':
        return <PlaceholderPage title="Filières" onNavigate={navigate} />
      case 'Absences':
        return <PlaceholderPage title="Absences" onNavigate={navigate} />
      case 'Notes':
        return <PlaceholderPage title="Notes" onNavigate={navigate} />
      case 'Utilisateurs':
        return <PlaceholderPage title="Utilisateurs" onNavigate={navigate} />
      default:
        return <Accueil onNavigate={navigate} />
    }
  }

  return renderPage()
}

export default App