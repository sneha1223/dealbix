import React from 'react'
import './Banner.css'
import Motors from '../Motors/Motors'
import Listings from '../Lisings/Listings'
import Testimonials from '../Testimonials/Testimonials'


function Banner() {
  return (
  
  <div>
    <Motors />
    <Listings />
    <Testimonials />
  </div>
  )
}

export default Banner