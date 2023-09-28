import React, { useEffect } from 'react'
import './Single.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePage, getSinglePage } from '../../Slices/SingleSlice'
import { imageUrl } from '../../Constant'
import SimilarAds from './SimilarAds'
import { useParams } from 'react-router-dom'
// import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'

function SinglePage() {

  const { mtr_slug } = useParams();
  const dispatch = useDispatch()
  const single = useSelector(getSinglePage)
  console.log("single", single);

  useEffect(() => {
    dispatch(fetchSinglePage(mtr_slug))
  }, [dispatch, mtr_slug])

  // const images = single.map((value) => ({
  //   original : imageUrl + mtr_image,
  //   thumbnail : imageUrl + mtr_image,
  // }))
  const images = [
    {
      original: imageUrl + single.mtr_image,
      thumbnail: imageUrl + single.mtr_image,
    }
  ];
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
          <h3 className='single-car-name'>{single.mtr_title} </h3>
          <p className='posting'>Posted 10 mints ago</p>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={true}
          />
          {/* <img className='single-car-img' src={imageUrl + single.mtr_image} alt='' /> */}
        </div>


        <div className='overview'>
          <h4>Item Overview</h4>

          <Row style={{ width: "80%", paddingTop: "20px" }}>
            <Col xs={6} md={2} sm={4} >
              <div className='overview-row' >
                <div className='overview-details'>
                  <h6>Histry Check</h6>
                  <img className='single-icons' src='/Images/car-history-check-icon.svg' alt='' />
                  <p style={{ fontFamily: "sans-serif", color: "red" }}>Request</p>
                </div>
              </div>
            </Col>

            <Col xs={6} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>trim</h6>
                  <img className='single-icons' src='/Images/Trim.png' alt='' />
                  <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{single.mtr_trim} </p>
                </div>
              </div>
            </Col>

            <Col xs={6} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>target market</h6>
                  <p style={{ fontFamily: "sans-serif", paddingTop: "20px" }}>UAE (can be exported)</p>
                </div>
              </div>
            </Col>

            <Col xs={6} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>year</h6>
                  <img className='single-icons' src='/Images/Calendar.png' alt='' />
                  <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{single.mtr_mfd_year} </p>
                </div>
              </div>
            </Col>

            <Col xs={6} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>Kilometers</h6>
                  <img className='single-icons' src='/Images/Km.png' alt='' />
                  <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{single.mtr_km} </p>
                </div>
              </div>
            </Col>

            <Col xs={6} md={2} sm={4}>
              <div className='overview-row'>
                <div className='overview-details'>
                  <h6>Regional specs</h6>
                  <img className='single-icons' src='/Images/Region.png' alt='' />
                  <p style={{ fontFamily: "sans-serif", }}>{single.mtr_rel_spec} </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <h4 className='heading-details'>Additional Details</h4>
          <div className='details-content'>
            {/* <Row>
              <Col xs={12} md={6}>
                <h6>Warranty</h6>
                <h6>Exterior Color</h6>
                <h6>Doors</h6>
                <h6>Body Type</h6>
                <h6>Body condition</h6>
                <h6>Mechanical condition</h6>
                <h6>Seller type</h6>
                <h6>No. of Cylinders </h6>
                <h6>Transmission Type </h6>
                <h6>Horsepower</h6>
                <h6>Fuel Type</h6>
                <h6 style={{ paddingBottom: "115px" }}>Extras</h6>
              </Col>

              <Col xs={12} md={6} className='fffff'>
                <h6>{single.mtr_warrenty}  </h6>
                <h6>{single.mtr_color}</h6>
                <h6>{single.mtr_doors}</h6>
                <h6>{single.mtr_body_type}</h6>
                <h6>{single.mtr_body_cond}</h6>
                <h6>{single.mtr_body_cond}</h6>
                <h6>Owner</h6>
                <h6>{single.mtr_cylinder}</h6>
                <h6>{single.mtr_transmission}</h6>
                <h6>{single.mtr_horsepower}</h6>
                <h6>{single.mtr_fuel}</h6>
                <h6 style={{ paddingBottom: "111px" }}>{single.mtr_extra}</h6>
              </Col>
            </Row> */}

            <div className='description'>
              <h4 className='heading-details'>Description</h4>
              <p className='d-flex'>{single.mtr_description} </p>
              <hr />
            </div>
          </div>
        </div>
        <div className='car-history'>
          <h4 className='heading-details'>car history</h4>
          <div className='d-flex flex-direction-row p-4'>
            <img className='icons-check' src='/Images/car-history-report.svg' alt='' />
            <h6 className='accident'>Accident History Check</h6>
          </div>
          <p>Get a detailed view of this vehicle’s accident history, import status, and mileage benchmarking <span><a href='/'>View Sample report</a></span></p>
          <Button className='report'>Buy report</Button>
          <hr className='pt-4' />
          <hr />
        </div>
        <div>
          <h4 className='heading-details'>Location </h4>
          <div className='d-flex flex-direction-row' >
            <img src='/Images/map.svg' alt='' />
            <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{single.location_name}</p>
          </div>
          <hr style={{ marginTop: "100px" }} />
          <div className='report'>
            <h6>Is there an issue?</h6>
            <h6 style={{ color: "red", fontWeight: "600" }}>Report this ad</h6>
          </div>
          <hr />
          <SimilarAds />
        </div>
      </Container>
    </div>
  )
}

export default SinglePage