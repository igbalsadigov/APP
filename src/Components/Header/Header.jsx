import React from 'react'
import style from '../Header/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Components/Images/logo(3).png'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
            <img src={logo} alt="" />
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Latest</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div  className={style.icons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBasketShopping} />
        </div>
      </div>
    </div>
  )
}

export default Header
