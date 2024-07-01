import React from 'react'
import Navbars from '../Component/Navbars'
import Footer from '../Component/Footer'
import Course from '../Component/Course'

const Courses = () => {
  return (
    <div> 
      <Navbars/>
     <div className='min-h-screen'>
     <Course/>
     </div>
      <Footer/>
    </div>
  )
}

export default Courses