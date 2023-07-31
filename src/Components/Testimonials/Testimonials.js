import React from 'react'
import './Testimonials.css'
import { Container,Row,Col } from 'react-bootstrap'

function Testimonials() {
  return (
    <Container>
    <div>
        <h2 className='test-heading'>Testimonials</h2>
    </div>
    <div>
    <Row>
       <Col xs={12}md={4}>
       <div  className='quotes'>
            <p>" I've been using dubizzle now for 10 years, I've literally lost count of the number cars I've bought and sold from it. Its become so addictive, I tend to log-on most days - planning the next car is both fast &amp; fun. "</p>
            <div className='bottom'>
            <img className='round-pic' src='/Images/round-pic.jpeg' alt='' />
            <p className='names'>Sid</p>
            </div>
           
        </div>
       </Col>

       <Col xs={12} md={4}>
         <div className='quotes'>
           <p>"CarReport recently saved me a trip to Oman for a car I was seriously looking at where the friendly seller claimed "no accidents". However for 99 dirhams and 2 minutes online, CarReport revealed 4 accidents on the car’s history." </p>
           <div className='bottom'>
            <img className='round-pic' src='/Images/round-pic.jpeg' alt='' />
            <p className='names'>Sid</p>
            </div>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className='quotes'>
        <p>"Put my Hyundai Coupe up for sale on @dubizzle. Got a call within an hour and sold within the same day" </p>
        <div className='bottom'>
            <img className='round-pic' src='/Images/round-pic.jpeg' alt='' />
            <p className='names'>Sid</p>
            </div>
        </div> 
      </Col>
    </Row>
        
        <div style={{marginTop:"40px"}}>
        <Row>
            <Col xs={12}md={4}>
          <div className='app-ad'>
            <h3 style={{color:"black",fontWeight:600,fontSize:"20px"}}>Find amazing deals on the go.</h3>
            <h3 style={{color:"red",fontWeight:600,fontSize:"20px"}}>Download the app now!</h3>
          </div>
            </Col>

          <Col xs={12} md={2}>
            <img src='Images/apps-download-preview.png' alt='' />
          </Col>
          
          <Col xs={12} md={2}>
            <img className='app' src='Images/appStore.png' alt='' />
          </Col>

          <Col xs={12} md={2}>
            <img  className='app' src='Images/play1.png' alt='' />
          </Col>

          <Col xs={12} md={2}>
            <img className='app' src='Images/appgallery.png' alt='' />
          </Col>
        </Row>
        </div>
    </div>
    </Container>
  )
}

export default Testimonials