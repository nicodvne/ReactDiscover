import {useState} from 'react';


function Item (props) {

    const [itemState, setItemState] = useState("Item state !");
    
    return (
        <div>
            <h2>{props.number}</h2>
            {/* Etape 2 : J'appelle la fonction passée en props avec le state 
            du composant fils lors du click sur le bouton */}
            <button onClick={() => props.func(itemState)}> Change State</button>
        </div>
    )
}

export default Item