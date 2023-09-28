import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleNumber, getSingleNumber } from '../../Slices/SingleSlice'
import { Row,Col,Container,Button } from 'react-bootstrap'
import SimilarAds from '../../Pages/SinglePage/SimilarAds'
import { imageUrl } from '../../Constant'
import { useParams } from 'react-router-dom'

function SingleNumber() {

    const { mtr_slug} = useParams()
    const dispatch = useDispatch()
    const numberPlate = useSelector(getSingleNumber)
    console.log("NumberPlate",numberPlate);

    useEffect(()=>{
        dispatch(fetchSingleNumber(mtr_slug))
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
      <h3 className='single-car-name'>{numberPlate.mtr_title} </h3>
      <p className='posting'>Posted 10 mints ago</p>
      <img className='single-car-img' src={imageUrl + numberPlate.mtr_image} alt='' />
    </div>

    <div className='overview'>
      <h4>Item Overview</h4>

      <Row style={{ width: "80%", paddingTop: "20px" }}>
        <Col xs={12} md={2} sm={4} >
          <div className='overview-row' >
            <div className='overview-details'>
              <h6>PLATE NUMBER</h6>
              <p style={{ fontFamily: "sans-serif", color: "red" }}>Request</p>
            </div>
          </div>
        </Col>

         <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>PLATE CODE</h6>
              <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{numberPlate.plate_code} </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={2} sm={4}>
          <div className='overview-row'>
            <div className='overview-details'>
              <h6>PLATE STYLE</h6>
              <p style={{ fontFamily: "sans-serif", }}>{numberPlate.mtr_warrenty} </p>
            </div>
          </div>
        </Col>
    </Row>
    </div>

   <div>
        <div className='description'>
          <h4 className='heading-details'>Description</h4>
          <hp className='d-flex'>{numberPlate.mtr_description} </hp>
<hr />
        </div>
    </div>

    <div>
      <h4 className='heading-details'>Location </h4>
      <div className='d-flex flex-direction-row' >
        <img src='/Images/map.svg' alt='' />
        <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{numberPlate.location_name}</p>
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

export default SingleNumber