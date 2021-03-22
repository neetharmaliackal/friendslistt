import {React} from 'react';
import './friend-thumbnail.scss';
import {Link} from 'react-router-dom';

// import {Link} from 'react-router-dom';

//functional component
const FRIENDTHUMBNAIL= ({title,imageUrl,id}) => (
    
   
      <div className='category'>
       <img src={imageUrl} />
           
   
        
   
        
        <Link to={'/FriendDetails/'+id}><h1 className='title'>{title}</h1></Link>
        
    </div>
// </div>
)

export default FRIENDTHUMBNAIL;

