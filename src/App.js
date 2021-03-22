import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom';
// import { connect } from 'react-redux';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import fire from './firebase/firebase.util';
// import firebase from 'firebase/app';
import Home from './components/homepage/homepage';
import Directory from './components/Friend-thumbnail/directory/directory.jsx';
import FriendDetails from './components/Friend-thumbnail/friend-data/friend-detail/friend-detail';
import Header from './components/header/header.jsx';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render() {
    return(
      <div>
          <Router> 
            <Header/>
          <switch>
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={SignUp} />
          <Route path='/directory' component={Directory} />
          <Route path="/FriendDetails/:id" component={FriendDetails}/>
          <Route
            
            path='/Login'
            render={() =>
              this.state.user ? (<Home/>) : (<SignUp/>)}
          />
          </switch>
            
          </Router>
        
        
      </div>

    )
  }
}
export default App;