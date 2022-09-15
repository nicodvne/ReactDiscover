import {useState} from 'react';
import Item from './Components/Item/Item';

function App() {

  const [inputData, setInputData] = useState();

  const changeInput = (e) => {
    setInputData(e);
  }
   
  return (
    <div className="App">
      <h1>Hello depuis App.js</h1>
      <input 
        type="text"
        onInput={e => changeInput(e.target.value)}
      >
      </input>
    </div>

  );
}

export default App;
