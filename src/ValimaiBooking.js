import React from 'react'
import './ValimaiBooking.css';
import MovieCards from './MovieCards';
import DisplayCalendar from './DisplayCalender';
function ValimaiBooking() {
    
    function handleClick(event){
        console.log(event.target.innerHTML);
    }
  return (
    <div className='valimai'>
        <h2>Book now to watch Valimai in your favorite theatre</h2>
        <div className='valimai__container'>
            <div className='valimai__image'>
            <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
        />
            </div>
            <div className='valimai__instructions'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Neque gravida in fermentum et sollicitudin. Id faucibus nisl tincidunt eget nullam non nisi. Aliquam nulla facilisi cras fermentum odio. Morbi tristique senectus et netus et. Non arcu risus quis varius quam quisque id diam. Sagittis orci a scelerisque purus semper eget duis at. Ornare quam viverra orci sagittis eu. Enim lobortis scelerisque fermentum dui faucibus in. Nulla at volutpat diam ut. Viverra aliquet eget sit amet tellus cras adipiscing. Convallis a cras semper auctor neque vitae tempus. Blandit aliquam etiam erat velit scelerisque in dictum. Donec enim diam vulputate ut pharetra sit amet aliquam. Massa sed elementum tempus egestas sed sed risus pretium quam.</p>
            </div>
            <div className='valimai__right__info'>
                <div className='valimai__theatre__info'>
                    <label for = "theater_select">Choose a theatre: </label>
                    <select className = 'theater__select' name = "select_region" id = "region">
                        <option value = "KG Cinemas">KG Cinemas</option>
                        <option value = "Ganesh">Ganesh</option>
                        <option value = "Cine polis">Cine polis</option>
                    </select>
                </div>
            <div className='valimai__calendar'>
                <DisplayCalendar/>
            </div>
                <div className='valimai__available__time'>
                    <button className = "timing__button" type = "submit" onClick={handleClick}>10:00 AM</button>
                    <button className = "timing__button" type = "submit">02:00 PM</button>
                    <button className = "timing__button" type = "submit">06:30 PM</button>
                    <button className = "timing__button" type = "submit">10:00 PM</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValimaiBooking       