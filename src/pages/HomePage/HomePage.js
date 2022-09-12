import React from 'react'
import Banner from './Components/Banner/Banner'
import Experience from './Components/Experience/Experience'
import Faq from './Components/Faq/Faq'
import Feature from './Components/Feature/Feature'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'

export default function HomePage() {
  return (
    <div>
        <Header />
        <Banner />
        <Services />
        <Experience />
        <Feature />
        <Faq />
        <Testimonial />
        <Footer />
    </div>
  )
}
