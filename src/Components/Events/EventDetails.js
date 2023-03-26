import React from 'react';
import './EventDetails.css';
 import { useLocation,useParams } from 'react-router-dom';

export default function EventDetails(props) {

  const location = useLocation();
  const data = location.state;
  var { id} = useParams();

  const findBlog = data.find((post) => post.id === Number(id))

  if (!findBlog) {
      return <p>No blogs found.</p>
  }

  return (
    <div>
      <div className="event_details">
        <h1>{ findBlog.name}</h1>
        <label className='desc'>GUIDELINES</label>
        <ul>
        {
          findBlog.desc.map((points,index)=>( 
              <li className='points' key={index}>{points}</li>
          ))
        }
        </ul>
      </div>     
      </div>
  );

 
}