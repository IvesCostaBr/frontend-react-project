import React from 'react';


export default function ItemComponent(props){
    const status = props.status
    return  (
    <div>
        <li>
            Item :{props.name} 
            <br></br>
            Satus:{status ? <p>Finalizado</p> : <p>Nao completo</p>} 

        </li>
    </div>
    )
}
