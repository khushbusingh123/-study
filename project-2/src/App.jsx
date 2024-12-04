import React from 'react'
 
 
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import About from './Component/Campus/Campus'
import Navbar from './Component/Navbar/Navbar'
import Programs from './Component/Programs/Programs'
import Testimonials from './Component/Teatimonials/Testimonials'
import Title from './Component/Title/Title'
 
 
 const App = () => {
   return (
     <div>
       <Navbar />
       <Hero />

       <div className="container">
       <Title subtitle='OUR PROGRAM' title='WHAT WE OFFER'/>
       <Programs />
       <About/>
      
       <Title subtitle='Gallery' title='Campus photos'/>
        <Campus/>
       <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
        <Title subtitle='CONTACT US' title='Get in Touch '/>
        <Contact/>
        <Footer/>
       </div>
             </div>
   )
 }
 
 export default App
 