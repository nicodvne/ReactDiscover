import {useState} from 'react';
import Item from './Components/Item/Item';

function App() {

  const [toogle, setToogle] = useState(true);

  const changeState = () => {
    setToogle(!toogle);
  }

  let toogleContent;
  toogleContent = toogle ? <h1>Le state est true</h1> : <h1>Le state est false</h1>

    return (
      <div className="App">
        {toogleContent}
        <button onClick={changeState}>Change State</button>
      </div>
  
    );
  
   
  
}

export default App;
