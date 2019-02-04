import React, { Component } from 'react';

import './form-login.css';
import SubmitImage from '../../../assets/images/submit-image.gif'

export default class FormLogin extends Component {
    state = {
        username: '',
        password: '',
    };

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`)
    }

    render () {
        return(
            <form className="form" onSubmit={this.onSubmit}>
                <label className="label">Username:
                    <input 
                    className="input"
                    type="text" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.onUsernameChange} />
                </label>
               <label className="label">Password:
               <div className="display-flex">
                    <input
                    className="password-input" 
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.onPasswordChange} />

                    <input
                    className="submit-input"
                    type="image" 
                    src={SubmitImage} 
                    alt="Submit Form" />
                </div>
                    <p>You must be logged in to read full text of reviews.</p>
                    <p className="p-small">> Logged-in users can make lists, save searches, e-mail, and more!</p>
                    <p className="p-small">> Try a 
                        <a 
                            title="Try a free 14-day trial of Booklist Online today!" 
                            href="*"> free trial </a> 
                            trial or 
                        <a 
                            title="Subscribe" 
                            href="*"> subscribe </a> 
                            today
                    </p>
                    <p className="margin-bottom-5">
                        <a 
                        href="*"
                        name="lnkLostLogin"
                        title="Forgot your password?">Forgot your password? </a>
                    </p>
                </label>
            </form>
        )
    }
}