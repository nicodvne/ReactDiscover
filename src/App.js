import Item from "./Item";
import {useState} from 'react';

function App() {

  /*
    si console.log(useState(10)) => tableau : 
    [
      0: 10,
      1: f()... 
    ]
  */

  const [monState, setMonState] = useState(10);
  console.log(monState); // useState(10)[0] => 10
  console.log(setMonState); //useState(10)[1] => f()....
  

  return (
    <div className="App">
      <h1>Hello app react</h1>
      <Item />
      {monState} 
    </div>
  );
}

export default App;
