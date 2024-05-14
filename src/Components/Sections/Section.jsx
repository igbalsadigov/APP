import React from 'react'
import style from '../Sections/Section.module.css'
import logo from '../../Components/Images/watch.png'
const Section = () => {
  return (
    <div className={style.container}>
        <div className={style.twocontainer}>
        <div className={style.text}>
        <h1>Select Your New Perfect Style</h1>
        <p>Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure</p>
        <button>SHOP NOW</button>
      </div>
      <div>
        <img src= {logo} alt="" />
      </div>
        </div>
     
    </div>
  )
}

export default Section
