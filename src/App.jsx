import { useState } from 'react';
import Exercice1 from './exercices/exercice1/Index';
import Exercice2 from './exercices/exercice2/Index';
import Exercice3 from './exercices/exercice3/Index';
import './App.css';

function App() {
  const [exercice, setExercice] = useState(1);

  return (
    <>
      <div className='menu'>
        <button onClick={() => setExercice(1)}>Exercice 1</button>
        <button onClick={() => setExercice(2)}>Exercice 2</button>
        <button onClick={() => setExercice(3)}>Exercice 3</button>
      </div>
    
      <div className='conteneur'>
        {exercice === 1 && <Exercice1 />}
        {exercice === 2 && <Exercice2 />}
        {exercice === 3 && <Exercice3 setExercice={setExercice} />}
      </div>
    </>
  );
}

export default App;
