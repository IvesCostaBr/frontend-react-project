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
        config.headers['Authorization'] = 'Token b3bf3c92180fe349d56ae873176237cdb83f3e97'

        var url = 'http://127.0.0.1:8000/list_venda/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists:data, loading:false});
    }
    
    render(){
        const listApi = this.state.lists;
        return (
            <div>
                <h3> ID COMPRA:</h3>
                {listApi.map(
                    list => <ListComponent  key={list.id} listName={list.code} />)
                }
            </div>
        )
    }
    
}