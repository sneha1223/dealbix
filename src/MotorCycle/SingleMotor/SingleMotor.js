import React, { useEffect } from 'react'
import { Container,Col,Row, Button } from 'react-bootstrap'
import { imageUrl } from '../../Constant'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleMotor, getSingleMotor } from '../../Slices/SingleSlice'
import SimilarAds from '../../Pages/SinglePage/SimilarAds'
import { useParams } from 'react-router-dom'

function SingleMotor() {

  const { mtr_slug } = useParams()
  const dispatch = useDispatch();
  const SingleMotor = useSelector(getSingleMotor)
  console.log("singleMotor",SingleMotor)

  useEffect(()=>{
    dispatch(fetchSingleMotor(mtr_slug))
  },[dispatch,mtr_slug])

  return (
    <Container>
    <div className='single-btn-grp'>
      <a href='/sale'>
        <Button className='back-to'>Back to Search</Button>
      </a>
      <a href='/'>
        <Button className='elements'>Dubai</Button>
      </a>
      <a href='/'>
        <Button className='elements'>Motors</Button>
      </a>
      <a href='/sale'>
        <Button className='elements'>Used Cars for sale</Button>
      </a>
      <a href='/sale'>
        <Button className='elements'>Jeatour</Button>
      </a>
      <a href='/sale'>
        <Button className='elements'>X70</Button>
      </a>

    </div>


    <div className='single-details'>
      <h3 className='single-car-name'>{SingleMotor.mtr_title} </h3>
      <p className='posting'>Posted 10 mints ago</p>
      <img className='single-car-img' src={imageUrl + SingleMotor.mtr_image} alt='' />
    </div>


    <div className='overview'>
      <h4>Item Overview</h4>

      <Row style={{ width: "80%", paddingTop: "20px" }}>
        <Col xs={12} md={2} sm={4} >
          <div className='overview-row' >
            <div className='overview-details'>
              <h6>USAGE</h6>
              {/* <img className='single-icons' src='/Images/car-history-check-icon.svg' alt='' /> */}
              <p style={{ fontFamily: "sans-serif", color: "red" }}>Request</p>
            </div>
          </div>
        </Col>

         <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>Kilometers</h6>
              <img className='single-icons' src='/Images/Km.png' alt='' />
              <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{SingleMotor.mtr_km} </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>WARRANTY</h6>
              <img className='single-icons' src='/Images/Warranty.png' alt='' />
              <p style={{ fontFamily: "sans-serif", }}>{SingleMotor.mtr_warrenty} </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>year</h6>
              <img className='single-icons' src='/Images/Calendar.png' alt='' />
              <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{SingleMotor.mtr_mfd_year} </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>FINAL DRIVE SYSTEM</h6>
              <p style={{ fontFamily: "sans-serif", paddingTop: "20px" }}>UAE (can be exported)</p>
            </div>
          </div>
        </Col>

        
      </Row>
    </div>

    <div>
      <h4 className='heading-details'>Additional Details</h4>
      <div className='details-content'>
        <Row>
          <Col xs={12} md={6}>
            <h6>Wheels</h6>
            <h6>Manufacturer</h6>
            <h6>Seller type</h6>
            <h6>Engine Size</h6>
            {/* <h6>Body condition</h6>
            <h6>Mechanical condition</h6>
            <h6>Seller type</h6>
            <h6>No. of Cylinders </h6>
            <h6>Transmission Type </h6>
            <h6>Horsepower</h6>
            <h6>Fuel Type</h6>
            <h6 style={{ paddingBottom: "115px" }}>Extras</h6> */}

          </Col>
          <Col xs={12} md={6} className='fffff'>
            <h6>{SingleMotor.mtr_warrenty}  </h6>
            <h6>{SingleMotor.mtr_color}</h6>
            <h6>{SingleMotor.mtr_doors}</h6>
            <h6>{SingleMotor.mtr_body_type}</h6>
            {/* <h6>{SingleMotor.mtr_body_cond}</h6>
            <h6>{SingleMotor.mtr_body_cond}</h6>
            <h6>Owner</h6>
            <h6>{SingleMotor.mtr_cylinder}</h6>
            <h6>{SingleMotor.mtr_transmission}</h6>
            <h6>{SingleMotor.mtr_horsepower}</h6>
            <h6>{SingleMotor.mtr_fuel}</h6> 
           <h6 style={{ paddingBottom: "111px" }}>{SingleMotor.mtr_extra}</h6> */}
          </Col>
        </Row>
        <div className='description'>
          <h4 className='heading-details'>Description</h4>
          <p className='d-flex'>{SingleMotor.mtr_description} </p>
<hr />
        </div>
      </div>
    </div>

    <div>
      <h4 className='heading-details'>Location </h4>
      <div className='d-flex flex-direction-row' >
        <img src='/Images/map.svg' alt='' />
        <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{SingleMotor.location_name}</p>
      </div>
      <hr style={{ marginTop: "100px" }} />
      <div className='report'>
        <h6>Is there an issue?</h6>
        <h6 style={{ color: "red", fontWeight: "600" }}>Report this ad</h6>
      </div>
      <hr />
      {/* <SimilarAds /> */}
      <SimilarAds />
    </div>
  </Container>
  )
}

export default SingleMotor