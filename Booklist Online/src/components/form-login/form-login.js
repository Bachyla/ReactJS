import React, { Component } from 'react';

import './form-login.css';
import SubmitImage from '../../assets/images/submit-image.gif';

export default class FormLogin extends Component {
    state = {
        username: '',
        password: '',
    }

    onSubmit(event) {
        console.log(`${this.state.username}, Hello!`);
        event.preventDefault();
    }

    onUsernameChange = ({ target: { value } }) => {
        this.setState({ username: value })
    }

    onPasswordChange = ({ target: { value } }) => {
        this.setState({ password: value})
        console.log(this.state.password)
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
                    onChange={this.onUsernameChange}
                    />
                </label>
               <label className="label">Password:
               <div className="display-flex">
                    <input
                    className="password-input" 
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                    />
                    <input
                    className="submit-input"
                    type="image" 
                    src={SubmitImage} 
                    alt="Submit Form" 
                    />
                </div>
                </label>
            </form>
        )
    }
}