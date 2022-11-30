import {useState} from 'react';
import Item from './Components/Item/Item';

function App() {

  const [dataArr, setDataArr] = useState([
    {nom: "Juliette"},
    {nom: "Nicolas"},
    {nom: "John"},
  ]);

  /**
   * const changeState = () => {
    setToogle(!toogle);
  }
   */
  

  /**
   * return (
      <div className="App">
        <div className={toogle ? "box animated" : "box"}></div>
        <button onClick={changeState}>Change State</button>
      </div>
  
    );
   */

    return (
      <div className="App">
         {/**
          * Ici, l'index nous permet d'indentifier de facon unique (0, 1, 2) les éléments de la liste comme les index d'un tableau
          * Il s'agit d'un comportement de base de la méthode map
          * Si pas d'index -> erreur dans la console JS
          */}
          { dataArr.map((item, index) => { return <p key={index}> Nom: {item.nom}</p> })}
      </div>
    )
    
  
   
  
}

export default App;
