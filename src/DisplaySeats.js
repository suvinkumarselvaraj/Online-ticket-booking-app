import React from 'react'
import SelectSeats from './SelectSeats'
import './DisplaySeats.css';
import {useStateValue} from './StateProvider';

function DisplaySeats() {
  const [{movie__time,theatre, movie__date},dispatch] = useStateValue();
  return (
    <div className='display__seats'>
      <div className='display__left__details'>
        
        <strong>Valimai</strong>
        <p>{movie__time}</p>
        <p>{movie__date}</p>
        <p>{theatre}</p>
      </div>
      <div className='display__right__details'>
      <SelectSeats/>
      </div>
    </div>
  )
}

export default DisplaySeats