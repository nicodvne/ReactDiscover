import {useState} from 'react';

function App() {

  const [monState, setMonState] = useState(10);

  const modifyState = () => {
    setMonState(monState + 1);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState} </h1>
    
      <button onClick={modifyState}> Change state</button>
    </div>
  );
}

export default App;
