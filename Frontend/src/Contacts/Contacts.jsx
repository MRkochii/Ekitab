import React from 'react'
import Navbars from '../Component/Navbars'
import Footer from '../Component/Footer'
import Contact from '../Component/Contact'



const Contacts = () => {
  return (
    <div>
       <div> 
      <Navbars/>
      <div className='min-h-screen'>
      <Contact/>
      </div>

      <Footer/>
    </div>
    </div>
  )
}

export default Contacts






