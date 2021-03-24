import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom';
// import { connect } from 'react-redux';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
// import fire from './firebase/firebase.util';
// import firebase from 'firebase/app';
// import Home from './components/homepage/homepage';
import Directory from './components/Friend-thumbnail/directory/directory.jsx';
import FriendDetails from './components/Friend-thumbnail/friend-data/friend-detail/friend-detail';
import Header from './components/header/header.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
import { Switch,  Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  //  unsubscribeFromAuth = null;
  
    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
    return(
      <div>
          <Router> 
            <Header/>
          <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={SignUp} />
          <Route path='/directory' component={Directory} />
          <Route path="/FriendDetails/:id" component={FriendDetails}/>
         
          {/* <Route
              exact
              path='/Login'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/Directory' />
                ) : (
                  <SignUp />
                )
              }
              /> */}
          </Switch>
            
          </Router>
        
        
      </div>

    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
