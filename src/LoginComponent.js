import React from 'react';
/*  Corrigir problema de falha de capturação da variavel password */
export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.password});
    }
    handleSubmit(event) {
        
        alert('Name:' + this.state.value + 'Password:' + this.state.password );
        event.preventDefault();
    }

        render() {
            return(
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Login:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            )
        }


}