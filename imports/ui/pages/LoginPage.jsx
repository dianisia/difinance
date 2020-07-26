import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(email, password, err => {
            if (err) {
                this.setState({
                    error: err.reason
                })
            } else {
                this.props.history.push('/');
            }
        })
    }

    render() {
        const error = this.state.error;
        return (
            <div id='auth-form'>
                <div id='title'>
                    <h1>Авторизация</h1>
                </div>
                <div>
                    {error.length > 0 ?
                        <div className="alert alert-danger fade in">{error}</div>
                        : ''}
                    <form id="auth-data-form"
                          onSubmit={this.handleSubmit}>
                        <div>
                            <input type="email"
                                   id="login-email"
                                   placeholder="Email"/>
                        </div>
                        <div>
                            <input type="password"
                                   id="login-password"
                                   placeholder="Пароль"/>
                        </div>
                        <div id="forget-password-link">
                            <a>Забыли пароль?</a>
                        </div>
                        <div>
                            <input type="submit"
                                   id="login-button"
                                   value="Войти"
                            >
                            </input>
                        </div>
                        <div id="signup-link">
                            <Link to="/signup">Зарегистрироваться</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}