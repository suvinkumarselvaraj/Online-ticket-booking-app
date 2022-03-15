import React from 'react'
import './MovieCards.css';
import {useHistory} from 'react-router-dom';
function MovieCards({id,image,title,genre}) {
  const navigate = useHistory();
  function handleClick(event){
      const id = event.target.id;
      var name = event.target.name;
      name = name.replace(/ +/g,"");
      console.log(name.toLowerCase());
      navigate.push("/movies/"+name+"/"+id);  
  }
  return (
    <div className='movie__cards'>
        <div className='movie__des'>
            <img name = {title} id = {id} className='movie__image' src = {image} alt = "" onClick={handleClick}>
            </img>
            <section className='movie__text__des'>
            <h3>{title}</h3>
            <p>{genre}</p>
            </section>
        </div>    
    </div>

  )
}

export default MovieCards