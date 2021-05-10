import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(){
    return (
    <div>
        <h2>Minha lista</h2>
    <ul>
        <ItemComponent 
        name={'Meu Item'} 
        valor={'14,99'}/>
    </ul>
    </div>
    
    )
}