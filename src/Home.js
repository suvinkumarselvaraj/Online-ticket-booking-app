import React from 'react'
import MovieCards from './MovieCards';
import './Home.css';
function Home() {
  return (
    <div className='home'>
        <h1>Recommended Movies</h1>
        <div className='home__row__1'>
            <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
                />
                 <MovieCards 
                id = {2}
                image = "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg"
                title = "Etharkum Thuninthavan"
                genre = "Action/Commercial/Thriller"
                />
                <MovieCards 
                id = {3}
                image = "https://www.filmibeat.com/ph-big/2020/10/radhe-shyam_160326902360.jpg"
                title = "Radhe Shyam"
                genre = "Commercial/Romance"
                />
                <MovieCards 
                id = {4}
                image = "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                title = "The Batman"
                genre = "Adventure/Thriller"
                />
        </div>
        <div className='home__row__1'>
            <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
                />
                 <MovieCards 
                id = {2}
                image = "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg"
                title = "Etharkum Thuninthavan"
                 genre = "Action/Commercial/Thriller"
                />
                <MovieCards 
                id = {3}
                image = "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg"
                title = "Etharkum Thuninthavan"
                genre = "Action/Commercial/Thriller"
                />
        </div>
    </div>
  )
  }

export default Home;
