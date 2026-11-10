import { useState } from 'react'
import './ajouter.css'
import { filieres, groupes, stagiaires } from './data'

const navItems = ['Accueil', 'Stagiaires', 'Filières', 'Absences', 'Notes', 'Utilisateurs']

function Ajouter({ onNavigate, mode = 'add', stagiaireId = null, returnPage = 'Stagiaires' }) {
	const [error, setError] = useState('')
	const editingStagiaire = mode === 'edit'
		? stagiaires.find((stagiaire) => stagiaire.Sta_Id === stagiaireId)
		: null
	const initialGroupe = editingStagiaire
		? groupes.find((groupe) => groupe.Grp_Id === editingStagiaire.Grp_Id)
		: null
	const [selectedFiliere, setSelectedFiliere] = useState(initialGroupe?.Fil_Id ?? '')
	const [selectedGroupe, setSelectedGroupe] = useState(editingStagiaire?.Grp_Id ?? '')
	const groupesDisponibles = groupes.filter(
		(groupe) => String(groupe.Fil_Id) === String(selectedFiliere),
	)

	function handleSubmit(event) {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const cin = formData.get('cin').trim().toUpperCase()

		if (stagiaires.some((stagiaire) => (
			stagiaire.Sta_CIN.toUpperCase() === cin && stagiaire.Sta_Id !== editingStagiaire?.Sta_Id
		))) {
			setError('Ce CIN existe déjà.')
			return
		}

		const updatedStagiaire = {
			Sta_Id: editingStagiaire?.Sta_Id ?? Math.max(0, ...stagiaires.map((stagiaire) => stagiaire.Sta_Id)) + 1,
			Sta_CIN: cin,
			Sta_Nom: formData.get('nom').trim(),
			Sta_Prenom: formData.get('prenom').trim(),
			Sta_Naissance: formData.get('naissance'),
			Sta_Sexe: formData.get('sexe'),
			Sta_Tel: formData.get('telephone').trim(),
			Sta_Email: formData.get('email').trim(),
			Sta_Adresse: formData.get('adresse').trim(),
			Grp_Id: Number(formData.get('groupe')),
		}

		if (editingStagiaire) {
			Object.assign(editingStagiaire, updatedStagiaire)
		} else {
			stagiaires.push(updatedStagiaire)
		}

		onNavigate(returnPage, editingStagiaire?.Sta_Id)
	}

	return (
		<div className="ajouter-page">
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

			<main className="ajouter-main">
				<div className="page-header">
					<h1>{editingStagiaire ? 'Modifier un stagiaire' : 'Ajouter un stagiaire'}</h1>
					<span>Accueil / Stagiaires / {editingStagiaire ? 'Modifier' : 'Ajouter'}</span>
				</div>

				<form
					className="stagiaire-form"
					onSubmit={handleSubmit}
					onReset={() => {
						setSelectedFiliere(initialGroupe?.Fil_Id ?? '')
						setSelectedGroupe(editingStagiaire?.Grp_Id ?? '')
						setError('')
					}}
				>
					<section className="form-section">
						<h2>Informations personnelles</h2>
						<div className="form-grid">
							<label className="form-field">
								CIN <span>*</span>
								<input name="cin" required maxLength="20" defaultValue={editingStagiaire?.Sta_CIN ?? ''} />
							</label>
							<label className="form-field">
								Nom <span>*</span>
								<input name="nom" required defaultValue={editingStagiaire?.Sta_Nom ?? ''} />
							</label>
							<label className="form-field">
								Prénom <span>*</span>
								<input name="prenom" required defaultValue={editingStagiaire?.Sta_Prenom ?? ''} />
							</label>
							<label className="form-field">
								Date de naissance <span>*</span>
								<input name="naissance" type="date" required defaultValue={editingStagiaire?.Sta_Naissance ?? ''} />
							</label>
							<fieldset className="form-field form-sex">
								<legend>Sexe <span>*</span></legend>
								<label><input name="sexe" type="radio" value="M" required defaultChecked={editingStagiaire?.Sta_Sexe === 'M'} /> Masculin</label>
								<label><input name="sexe" type="radio" value="F" defaultChecked={editingStagiaire?.Sta_Sexe === 'F'} /> Féminin</label>
							</fieldset>
							<label className="form-field">
								Téléphone
								<input name="telephone" type="tel" defaultValue={editingStagiaire?.Sta_Tel ?? ''} />
							</label>
							<label className="form-field">
								E-mail
								<input name="email" type="email" defaultValue={editingStagiaire?.Sta_Email ?? ''} />
							</label>
							<label className="form-field">
								Adresse
								<input name="adresse" defaultValue={editingStagiaire?.Sta_Adresse ?? ''} />
							</label>
						</div>
					</section>

					<section className="form-section">
						<h2>Informations de formation</h2>
						<div className="form-grid">
							<label className="form-field">
								Filière <span>*</span>
								<select
									name="filiere"
									required
									value={selectedFiliere}
									onChange={(event) => {
										setSelectedFiliere(event.target.value)
										setSelectedGroupe('')
									}}
								>
									<option value="" disabled>Choisir une filière</option>
									{filieres.map((filiere) => (
										<option key={filiere.Fil_Id} value={filiere.Fil_Id}>{filiere.Fil_Nom}</option>
									))}
								</select>
							</label>
							<label className="form-field">
								Groupe <span>*</span>
								<select
									name="groupe"
									required
									value={selectedGroupe}
									onChange={(event) => setSelectedGroupe(event.target.value)}
									disabled={!selectedFiliere}
								>
									<option value="" disabled>Choisir un groupe</option>
									{groupesDisponibles.map((groupe) => (
										<option key={groupe.Grp_Id} value={groupe.Grp_Id}>{groupe.Grp_Code}</option>
									))}
								</select>
							</label>
						</div>
					</section>

					{error && <p className="form-error" role="alert">{error}</p>}

					<div className="form-actions">
						<span className="required-note">* Champs obligatoires</span>
						<button type="submit" className="form-save">{editingStagiaire ? 'Enregistrer les modifications' : 'Enregistrer'}</button>
						<button type="reset" className="form-reset">Réinitialiser</button>
						<button type="button" className="form-cancel" onClick={() => onNavigate(returnPage, editingStagiaire?.Sta_Id)}>Annuler</button>
					</div>
				</form>
			</main>
		</div>
	)
}

export default Ajouter
