import { useState } from "react";
import "../../css/exo1.css";

function Index() {
  const [texte, setTexte] = useState("Aucun texte");
  const [color, setColor] = useState("");

  const changerTexte = () => {
    const nouveauTexte = prompt("Entrez le nouveau texte");
    if (nouveauTexte === null || nouveauTexte.trim() === "") {
      setTexte("Aucun texte");
    } else {
      setTexte(nouveauTexte);
    }
  };

  const changerCouleur = (couleur) => {
    setColor(couleur);
  };

  return (
    <div>
      <div className="container">
        <button onClick={changerTexte}>Changer le texte</button>
        <div className="button-group">
          <button style={{ color: "blue" }} onClick={() => changerCouleur("blue")}>bleu</button>
          <button style={{ color: "red" }} onClick={() => changerCouleur("red")}>rouge</button>
          <button style={{ color: "green" }} onClick={() => changerCouleur("green")}>vert</button>
        </div>
      </div>
      <h1 className="text-center" style={{ color: color }}>{texte}</h1>
    </div>
  );
}

export default Index;