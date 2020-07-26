import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from "meteor/accounts-base";
import styles from '../styles/styles.scss';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(password);
        Accounts.createUser({username: name, email: email, password: password});
    }

    render() {
        const error = this.state.error;
        return (
            <div id='signup-form'>
                <div id='title'>
                    <h1>Регистрация</h1>
                </div>
                <div>
                    {error.length > 0 ?
                        <div className="alert alert-danger fade in">{error}</div>
                        : ''}
                    <form id="auth-data-form"
                          onSubmit={this.handleSubmit}>
                        <div>
                            <input id="name"
                                   placeholder="Имя"/>
                        </div>
                        <div>
                            <input type="email"
                                   id="email"
                                   placeholder="Email"/>
                        </div>
                        <div>
                            <input type="password"
                                   id="password"
                                   placeholder="Пароль, 8+ символов"/>
                        </div>
                        <div>
                            <input type="submit"
                                   id="login-button"
                                   value="Зарегистрироваться"
                            >
                            </input>
                        </div>
                        <div id="auth-link">
                            <Link to="/login">Войти</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}