import React from 'react'
import './MovieCards.css';
function MovieCards({id,image,title,genre}) {
  return (
    <div className='movie__cards'>
        <div className='movie__des'>
            <img className='movie__image' src = {image} alt = "">
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