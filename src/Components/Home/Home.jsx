import React from 'react'
import Axios from '../Axios/Axios'
import Header from '../Header/Header'
import Sectione from '../Sectione/Sectione'
import Sectionn from '../Sectionn/Sectionn'
import Section from '../Sections/Section'


const Home = () => {
  return (
    <div>
      <Header/>
      <Section/>
      <Sectionn/>
      <Sectione/>    
     <Axios/>
    </div>
  )
}

export default Home
