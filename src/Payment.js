import React from 'react'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import './Payment.css'
import MovieCards from './MovieCards';
import CardElement from './CardElement';
function Payment() {
  const [{seat__array,movie__time,theatre, movie__date},dispatch] = useStateValue();
  function displaySeats(){
   return (
     <div>
   {seat__array.map(element => <span>{element.id} /</span>)}
   </div>
   )
}
    
  return (
    <div className='payment'>
    <div className='payment__container'>
        <div className='total__items'>
          Total seats booked: {seat__array.length}
          <br></br>
          <span>Seat number: </span>
          <br></br>
          {displaySeats()}
          <div className='currency__format'>
         <CurrencyFormat
        renderText={(value)=>(
            
            <h3 className="payment__total">Ticket cost: ₹{seat__array.length*100}</h3>
            
        )}
        decimalScale={2}
        value = {3}
        displayType= {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
        /> 
        </div>
        <strong>Valimai</strong>
        <p>Movie start time: {movie__time}</p>
        <p>Booked at: {movie__date.substring(0,16)}</p>
        <p>Venue: {theatre}</p>
        <div className='movie__des'>

        </div>

       </div>
       
        <div className='movie__details'>
        <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
        />
        </div>
      </div>
      <div className='card'>
        <CardElement/>
      </div>
      <div className='payment__buttons'>
        <button type='submit' className='payment__button'>Pay now</button>
      </div>
      </div>
    
  )
}

export default Payment