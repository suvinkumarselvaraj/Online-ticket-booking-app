import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to = "/">
        <img className='header__image' src = "https://timesnext.com/wp-content/uploads/2020/01/ticketnew-india.png"/>
        </Link>
        <input type='text' className='header__input' placeholder = "search the movies"></input>
        <button className='header__search__button'>Search</button>
        <div className='header__right'>
        <Link to = "/">
        <HomeIcon className='header__home__icon' fontSize='large'/>
        </Link>
            <select className = 'header__select' name = "select_region" id = "region">
                <option value = "bangalore">Bangalore</option>
                <option value = "coimbatore">Coimbatore</option>
                <option value = "chennai">Chennai</option>
            </select>
            <button className='header__button'>Sign in</button>
          </div>
    </div>
  )
}

export default Header