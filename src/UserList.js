import React from 'react';
import ListComponent from './ListComponent'
import LoginComponent from './LoginComponent'

export default class UserLists extends React.Component {
    state = { lists: [], loading: false}
    

    async componentDidMount(){
        /*  Configuração da API denro do componente*/ 
        const config = {
            /** cabeçalho que iremos passar */
            headers: {
                'Content-Type': 'application/json'

            }
        }

        config.headers['Authorization'] = 'Token 260fa3152a5545dd05b6616a2a7c1dbb541165db'


        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config); /**quando fizer a chamada(fetch) nessa url vai passar a config da API token */
        const data = await response.json();
        this.setState({lists:data, loading:true});
        console.log(data);
    }
    
    render(){
        const ObjetoApi = this.state.lists;
        var token = '';

        if(token === '')
            return <LoginComponent />
        else
            return (
                <div>  
                    {ObjetoApi.map(
                        objeto => <ListComponent  
                        key={objeto.id} 
                        listName={objeto.name}
                        items={objeto.item_set}/>
                    )
                }
                </div>
            )
    }
    
}