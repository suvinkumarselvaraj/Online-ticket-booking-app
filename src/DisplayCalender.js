import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DisplayCalender.css';
function DisplayCalender() {
  const [value,setValue] = useState(new Date());
  function handleChange(value){
    setValue(value);
  }
  return (
    <div className='calendar'>
      <Calendar className = 'calendar__display' onChange={handleChange} value = {value} maxDate={new Date("2022-3-20")} minDate={new Date()} />
    </div>
  )
}

export default DisplayCalender;