import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCards.css';
import {useHistory} from 'react-router-dom';
function MovieCards({id,image,title,genre}) {
  const navigate = useHistory();
 
      const idTracker = id;
      var name =title;
      name = name.replace(/ +/g,"").toLowerCase();
  
  
  return (
    <div className='movie__cards'>
        <div className='movie__des'>
           <Link to ={"/"+name+"/"+id}> <img name = {title} id = {id} className='movie__image' src = {image} alt = "">
            </img></Link>
            <section className='movie__text__des'>
            <h3>{title}</h3>
            <p>{genre}</p>
            </section>
        </div>    
    </div>

  )
}

export default MovieCards