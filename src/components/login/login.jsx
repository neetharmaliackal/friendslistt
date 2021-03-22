import React from 'react';

import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';

import fire from "../../firebase/firebase.util";

import './login.scss';

class Login extends React.Component {
  constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
// signup(e){
//     e.preventDefault();
//     fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//         console.log(u)
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
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
          {/* <div className='buttons'> */}
          
            {/* <CustomButton type='submit'> Sign in </CustomButton> */}
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}
          {/* </div> */}
        </form>
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
