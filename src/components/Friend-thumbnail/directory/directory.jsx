

//class component as we need to store the state value
import React from 'react';
import FRIENDTHUMBNAIL from '../friend-thumbnail';
import './Directory.scss'
import {FRIEND_DATA} from '../friend-data/friend-data.js';
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections :  FRIEND_DATA
        }
    }

    render() {
      console.log(FRIEND_DATA);
        return(
            <div className='directory-menu'>
                {
                  
                  this.state.sections.map((person) => (
                    <FRIENDTHUMBNAIL key={person.phone} title={person.name.first} imageUrl={person.picture.medium} id={person.phone} />
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;



