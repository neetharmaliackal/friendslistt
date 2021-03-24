import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';

import fire from "../../firebase/firebase.util";
import {auth,signInWithGoogle,signInWithFb} from '../../firebase/firebase.util';
import './login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className='login'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form className='loginform' onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div>
          <button className='button' onClick={this.login}>Login</button>
      </div>
      
          <div className='buttons'> 
           <CustomButton className='CustomButton1' onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> 
            <CustomButton className='CustomButton2' onClick={signInWithFb} isFbSignIn>
              Sign in with fb
            </CustomButton> 
            
           </div>
        </form>
        <div><text> Don't have an acount? Create here</text></div>
      </div>
    );
  }
}

export default Login;
// ---------------------------------
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./login.scss";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }
