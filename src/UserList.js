import React from 'react';
import ListComponent from './ListComponent'

export default class UserLists extends React.Component {
    state = { lists: [], loading: false}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'

            }
        }
        config.headers['Authorization'] = 'Token 260fa3152a5545dd05b6616a2a7c1dbb541165db'

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists:data, loading:false});
    }
    
    render(){
        const listApi = this.state.lists;
        return (
            <div>
                {listApi.map(
                    list => <ListComponent  
                    key={list.id} 
                    items={list.item_set}/>
                )
                }
            </div>
        )
    }
    
}