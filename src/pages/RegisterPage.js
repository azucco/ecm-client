import React from "react";
import '../css/form.css';
import Logo from '../img/ecm_logo.png';
import axios from "axios";

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            colorClass: "form-control colorRed"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://api-ecm.herokuapp.com/register`, {
            username: this.state.username,
            mail: this.state.mail,
            password: this.state.confermaPassword,
            team: this.state.team
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

                if(res.data.token !== ""){
                    // inserisco il token nel local storage
                    // redirect in "/"
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
        }, this.handleConfirmPassword)

    }

    handleConfirmPassword() {
        if (this.state.confermaPassword === this.state.password) {
            this.setState({
                colorClass: "form-control colorGreen"
            })
        } else {
            this.setState({
                colorClass: "form-control colorRed"
            })
        }
    }

    render() {
        return (
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Registrati</h1>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    required
                    autoFocus
                    name="mail"
                    onChange={this.handleChangeValue}
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={this.handleChangeValue}
                />
                <label htmlFor="confermaPassword" className="sr-only">Conferma password</label>
                <input
                    type="password"
                    id="confermaPassword"
                    className={this.state.colorClass}
                    placeholder="Conferma password"
                    required
                    name="confermaPassword"
                    onChange={this.handleChangeValue}
                />
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
                <label htmlFor="selectTeam" className="sr-only">Team</label>
                <select
                    id="selectTeam"
                    className="form-control"
                    required
                    name="team"
                    onChange={this.handleChangeValue}
                >
                    <option value="">Seleziona il Team</option>
                    <option value="1">EAM</option>
                    <option value="2">Web</option>
                    <option value="3">IoT</option>
                    <option value="4">Altro</option>
                </select>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Invia</button>
            </form>
        )
    }
}