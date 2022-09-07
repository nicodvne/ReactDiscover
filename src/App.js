import {useState} from 'react';
import Item from './Item';

function App() {

  const [monState, setMonState] = useState(10);

  /* Etape 3 : je prend le state de Item et je le set dans le state de App */
  const modifyState = (data) => {
    setMonState(data);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState} </h1>
          {/* 
            Etape 1 : Je passe la fonction de modif de state 
            en props dans le composant fils 
          */}
          <Item func={modifyState}/>
    </div>

  );
}

export default App;
