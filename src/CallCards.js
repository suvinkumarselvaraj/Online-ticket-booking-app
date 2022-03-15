import React from 'react'
import MovieCards from './MovieCards'
import './CallCards.css';
import Footer from './Footer';
function CallCards({id,about}) {
  return (
      <div className='callcards__container'>
    <div className='callcards'>
        <div className='callcards__moviecards'>
         <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
        />
        </div>
        <div className='callcards__moviedesc'>
            <h2>IMDB: 86%</h2>
            <strong>About</strong>
            <p>Arjun, an IPS officer sets out for a mission on hunting down illegal bikers involving in theft and murder.</p>
            <input type = "button"  className='callcards__button' value = "Book Now"></input>
        </div>
        
       
       
    </div>
    
    </div>
  )
}

export default CallCards