import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className='header'>
        <div className='header__img'>
        <img className='header__image' src = "https://timesnext.com/wp-content/uploads/2020/01/ticketnew-india.png"/>
        </div>
        <input type='text' className='header__input' placeholder = "search the movies"></input>
        <button className='header__search__button'>Search</button>
        <div className='header__region'>
            <select name = "select_region" id = "region">
                <option value = "bangalore">Bangalore</option>
                <option value = "coimbatore">Coimbatore</option>
                <option value = "chennai">Chennai</option>
            </select>
        </div>
        <div className='header__login'>
            <button className='header__button'>Sign in</button>
        </div>
    </div>
  )
}

export default Header