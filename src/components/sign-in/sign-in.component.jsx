import React, { Component } from 'react';

import FormInput from './../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        console.log(event.target);

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and your password</span>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" type="email" value={this.state.email} required 
                        handleChange={this.handleChange} label="Email"
                    />
    
                    <FormInput name="password" type="password" value={this.state.password} 
                    handleChange={this.handleChange} required label="Password"
                    />
    
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;