import { useState } from 'react';
import '../../css/exo2.css';

function Exercice2() {
  const [cegeps, setCegeps] = useState([]);

  const ajouterCEGEP = () => {
    const cnom = prompt("Entrez le nom du CEGEP");
    const clogo = prompt("Entrez l'URL du logo du CEGEP");
    if (cnom && clogo) {
      setCegeps([...cegeps, { cnom, clogo }]);
    }
  };

  const supprimerCEGEP = (cnom) => {
    setCegeps(cegeps.filter(cegep => cegep.cnom !== cnom));
  };

  return (
    <div className="exo2-container">
      <button onClick={ajouterCEGEP}>Ajouter un CEGEP</button>
      <div className="cegep-list">
        {cegeps.map((cegep, index) => (
          <div key={index} className="card">
            <img src={cegep.clogo} alt={`${cegep.cnom} logo`} className="card-logo" />
            <span className="card-name">{cegep.cnom}</span>
            <button className="card-delete" onClick={() => supprimerCEGEP(cegep.cnom)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercice2;
