import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    return (
    <div>
        <h2>{ props.listName } </h2>
    <ul>
        <ItemComponent 
            name={'Meu Item'} 
            valor={'14,99'}/>
    </ul>
    </div>
    
    )
}