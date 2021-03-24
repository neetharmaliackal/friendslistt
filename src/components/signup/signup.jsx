import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import {auth,signInWithGoogle,signInWithFb} from '../../firebase/firebase.util';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import fire from "../../firebase/firebase.util";

import './signup.scss';
import Login from '../login/login';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
  this.setState({
      [e.target.name] : e.target.value
  })
}


 
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          {/* <div> <button type='submit'>SIGN UP</button></div> */}
          <div>
          <button className='button' onClick={this.login}>signup</button>
      </div>
      <Link to={'/'}><text >Already got an account? Login Here</text></Link>
     
      <div className='buttons'> 
          
           
          <CustomButton className='CustomButton1' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton> 
          <CustomButton className='CustomButton2' onClick={signInWithFb} isFbSignIn>
            Sign in with fb
          </CustomButton> 
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
