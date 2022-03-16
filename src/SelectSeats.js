import React, {useState} from 'react'
import './SelectSeats.css';
import {useStateValue} from './StateProvider';

function SelectSeats() {
    var count = 0;
    var eachPersonCount=0;
    const [seatNo, trackId] = useState(0);
    const [total__seats, addSeats] = useState([0]);
    function changeColor(event){
        //console.log(event.target.style.backgroundColor);     
        const bgColor = event.target.style;
        if(bgColor.backgroundColor == "")
        {
            bgColor.backgroundColor = "red";
            eachPersonCount++;
            console.log(eachPersonCount);
        }
        else 
        {   eachPersonCount--;
            bgColor.backgroundColor ="";
        }
        console.log(event.target.style.backgroundColor);
        // if(bgColor)
        //     bgColor.backgroundColor ="red";
            trackId(event.target.id);
            console.log(seatNo);
            addSeats(oldArray => [...oldArray,event.target.id]);
            console.log(total__seats);
            

    }
  return (
    <div className='select__seats'>
        <div className='seat__column__1'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                {count}
                </div>
        ))}
        </div>

        <div className='seat__column__2'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__3'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count++}>
                        {count}
                </div>
        ))}
        </div>
        
    </div>
  )
}

export default SelectSeats