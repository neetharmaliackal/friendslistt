import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';

import fire from "../../firebase/firebase.util";
import {auth,signInWithGoogle,signInWithFb} from '../../firebase/firebase.util';
import './login.scss';
import {Link} from 'react-router-dom';
// import firestore from '../../firebase/firebase.util';
// import firebase from 'firebase/app';
// const firestore = firebase.firestore();
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
   
    //  fetchUsers=async()=>{
    //   const response=firestore.collection('users');
    //   const data=await response.get();
    //   data.docs.forEach(item=>{
    //     // setBlogs([...blogs,])


    //     console.log("fgfdgfdg",item.data() )
    //    })
    // }
      // componentDidMount()
      // {
        
      // }
      // data.docs.forEach(item=>{
      //  setBlogs([...users,item.data()])
      // })
 
  
  render() {
    return (
    
      <div className='login'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        <form className='loginform' onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            
            onChange={(event)=>this.setState({
              [event.target.name] : event.target.value
          })} required
            value={this.state.email}
            label='email'
            />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={(event)=>this.setState({
              [event.target.name] : event.target.value
          })} 
            label='password'
            required
          />
          <div>
            
          {/* <button className='button' onClick= {this.fetchUsers()} >Login</button> */}
          <Link to={'/Directory'}><button className='button'  >Login</button></Link>
      </div>
   
      <Link to={'/SignUp'}><text> Don't have an acount? Create here</text></Link>
     <div></div>
          <div className='buttons'> 
           <CustomButton className='CustomButton1' onClick={signInWithGoogle} isGoogleSignIn>
             Log in with Google
            </CustomButton> 
            <CustomButton className='CustomButton2' onClick={signInWithFb} isFbSignIn>
            Log in with fb
            </CustomButton> 
            
           </div>
        </form>
        {/* <div><text> Don't have an acount? Create here</text></div> */}
      </div>
    );
  }
}

export default Login;

