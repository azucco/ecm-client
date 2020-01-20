import React from "react";
import '../css/form.css';
import Logo from '../img/ecm_logo.png';
import axios from "axios";
import jwtDecode from "jwt-decode";

export default class Login extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://api-ecm.herokuapp.com/login`, {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

                if(res.data.token !== ""){
                    let token = res.data.token
                    // decode del token
                    let payload = jwtDecode(token)
                    // inserisco il token nel local storage
                    localStorage.setItem('ecmToken', token);
                    localStorage.setItem('ecmIdUser', payload.id);
                    // redirect in "/"
                    window.location.href = '/'
                }else{
                    // stampo a schermo il messaggio
                }
            })
    }

    componentDidMount() {
        axios.get(`https://api-ecm.herokuapp.com/user`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    handleChangeValue(event) {
        let name = event.target.name;
        let value = event.target.value
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <input
                    type="text"
                    id="inputUsername"
                    className="form-control"
                    placeholder="Username"
                    required
                    name="username"
                    onChange={this.handleChangeValue}
                />
                <label htmlFor="inputPasswordLogin" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPasswordLogin"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={this.handleChangeValue}
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Accedi</button>
            </form>
        )
    }
}