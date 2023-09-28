import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleBoat, getSingleBoat } from '../../Slices/SingleSlice'
import { useParams } from 'react-router-dom'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { imageUrl } from '../../Constant'

function SingleBoats() {

    const { mtr_slug } = useParams()
    const dispatch = useDispatch()
    const singleBoat = useSelector(getSingleBoat)
    console.log("SingleBoat",singleBoat);

    useEffect(()=>{
        dispatch(fetchSingleBoat(mtr_slug))
    },[dispatch,mtr_slug])
  return (
    <div>
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
          <h3 className='single-car-name'>{singleBoat.mtr_title} </h3>
          <p className='posting'>Posted 10 mints ago</p>
          <img className='single-car-img' src={imageUrl + singleBoat.mtr_image} alt='' />
        </div>


        <div className='overview'>
          <h4>Item Overview</h4>

          <Row style={{ width: "80%", paddingTop: "20px" }}>
            <Col xs={12} md={2} sm={4} >
              <div className='overview-row' >
                <div className='overview-details'>
                  <h6>Age</h6>
                  <p style={{ fontFamily: "sans-serif",paddingTop:"30px" }}>
                    {singleBoat.boat_age}
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>Usage</h6>
                  <p style={{ fontFamily: "sans-serif" }}>{singleBoat.motor_usage} </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>warranty</h6>
                  <img className='single-icons' src='/Images/Warranty.png' alt='' />
                  <p style={{ fontFamily: "sans-serif", paddingTop: "20px" }}>{singleBoat.mtr_warrenty}</p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>CONDITION</h6>
                  <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{singleBoat.mtr_body_cond} </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>LENGTH</h6>
                  <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{singleBoat.mtr_location} </p>
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
                <h6>Seller type</h6>
                </Col>

              <Col xs={12} md={6} className='fffff'>
                <h6>Owner</h6>
              </Col>
            </Row>
            <div className='description'>
              <h4 className='heading-details'>Description</h4>
              <p className='d-flex'>{singleBoat.mtr_description} </p>
               <hr />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className='heading-details'>Location </h4>
          <div className='d-flex flex-direction-row' >
            <img src='/Images/map.svg' alt='' />
            <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{singleBoat.location_name}</p>
          </div>
          <hr style={{ marginTop: "100px" }} />
          <div className='report'>
            <h6>Is there an issue?</h6>
            <h6 style={{ color: "red", fontWeight: "600" }}>Report this ad</h6>
          </div>
          <hr />
          {/* <SimilarAds /> */}
        </div>
      </Container>
    </div>
  )
}

export default SingleBoats