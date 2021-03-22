import React from 'react';
import {FRIEND_DATA} from '../friend-data.js';
import { useParams } from "react-router-dom";
import './friend-detail.scss'

const FriendDetails = ()=>{
    const { id } = useParams();
        console.log(FRIEND_DATA);
        console.log(id);
        const SelectedFriend =FRIEND_DATA.find(frienddetail=> {return frienddetail.phone === id});
        // const SelectedFriend= FRIEND_DATA.find( ({ frienddetail }) => frienddetail.id=== id );
        console.log(SelectedFriend );
        

    return(
        
        <div className='categoryy'>
                   <img src={SelectedFriend.picture.large}/>
                     <h1 className='title'>{SelectedFriend.name.first}</h1> 
                    <div>gender: {SelectedFriend.gender}</div>
                    <div>Age :{SelectedFriend.dob.age}</div>
                    <div>City :{SelectedFriend.location.city}</div>
                    <div>State :{SelectedFriend.location.state}</div>
                    <div>Country :{SelectedFriend.location.country}</div>
                    <div>dob :{SelectedFriend.dob.date}</div>
                   <div>email :{SelectedFriend.email}</div>
                    <div>Phone :{SelectedFriend.phone}</div>
                    
                </div>
    )
}
export default FriendDetails;
// --------------------------
// import React from 'react';
// import './article.scss';
// import NEWS_DATA from '../news/news';






// class Article extends React.Component{
   
    
  
//     render(){
//         const id = this.props.match.params.id;
//         console.log(NEWS_DATA);
//         const SelectedArticle = NEWS_DATA.filter((article) => article.id == id)[0];
//         console.log(SelectedArticle );
        
//         return (<div 
//             className='menu-item'>
//         <div className='content'>
//             <img src={SelectedArticle.imageUrl}/>
//             <h1 className='title'>{SelectedArticle.title}</h1>
//             <span className='subtitle'>{SelectedArticle.details}</span>
            
//         </div>
//     </div>
//             )
//     }
// }

// export default  Article ;

