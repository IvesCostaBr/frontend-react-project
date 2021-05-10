import React from 'react';


export default function ItemComponent(props){
    return  (
    <div>
        <li>Item Desc.:{props.name} </li>
        <li>Item Valor.:{props.valor} </li>
    </div>
    )
}
