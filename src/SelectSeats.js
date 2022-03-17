import React, {useState} from 'react'
import './SelectSeats.css';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';

function SelectSeats() {
    var count = 0;
        var eachPersonCount=0;
    const [count__seats,setCount] = useState(0);
    const [count__total, dispatch] = useStateValue([]);
    
    function handleClick(event){
        

    }
    function changeColor(event){
        //console.log(event.target.style.backgroundColor);   
        var i = 0;  
        const bgColor = event.target.style;
        if(bgColor.backgroundColor == "")
        {
            bgColor.backgroundColor = "green";
            console.log(eachPersonCount);
            setCount(count__seats+1);
            dispatch({
                type:'Add__movie__seats',
                item:{
                    id: event.target.id
                }
            })
        }
        else 
        {   eachPersonCount--;
            bgColor.backgroundColor ="";
            setCount(count__seats-1);
            dispatch({
                type:'Remove__movie__seats',
                item:{
                    id: event.target.id
                }
            })
        }
    }
  return (
    <div className='select__seats'>
        
        <div className='seat__column__1'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                {count}
                </div>
        ))}
        </div>

        <div className='seat__column__2'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__3'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        
        <div className='book__button__container'>
           <div className='display__seat__counts'>
               <h2>{count__seats}</h2><p>seats marked</p>
           </div>
           <Link to = "/movies/payment">
            <button className = "book__button" type='submit' onClick={handleClick}>Click here to proceed</button>
            </Link>
        </div>

        
    </div>
  )
}

export default SelectSeats