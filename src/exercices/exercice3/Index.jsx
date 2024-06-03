import { useState } from 'react';
import listeVehicules from './listeVehicules';
import '../../css/exo3.css';

function Exercice3() {
  const [vehicules, setVehicules] = useState(listeVehicules);
  const [reserved, setReserved] = useState(false);

  const reserverVehicule = (id) => {
    if (!reserved) {
      setVehicules(vehicules.map(vehicule => ({
        ...vehicule,
        reserve: true
      })));
      setReserved(true);
    }
  };

  return (
    <div>
      <NavBar />
      <Banner />
      <div className="text-center">
        <h2 className="title">Liste de nos véhicules</h2>
        <p className="subtitle">Vous pouvez réserver le véhicule de votre choix dans la liste suivante.</p>
      </div>
      <div className="vehicules-container">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="vehicule-card">
            <img src={vehicule.image} alt={`${vehicule.marque} ${vehicule.modele}`} className="vehicule-image" />
            <div className="vehicule-details">
              <h3>{vehicule.marque} {vehicule.modele}</h3>
              <p>Autonomie: {vehicule.autonomie} km</p>
              <p>Prix: {vehicule.prix} €</p>
              <p>État: {vehicule.etat}</p>
              {!vehicule.reserve && !reserved && (
                <button onClick={() => reserverVehicule(vehicule.id)}>Réserver</button>
              )}
              {(vehicule.reserve || reserved) && (
                <button disabled className="reserved">Réservé</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const NavBar = () => (
  <div className="menu-exercice3">
    <a href="#">Accueil</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>
);

const Banner = () => (
  <div className="banner">
    <h1>Les pros des véhicules électriques</h1>
  </div>
);

export default Exercice3;