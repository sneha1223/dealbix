import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleVehicle, getSingleVehicleSlice } from '../../Slices/SingleSlice'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { imageUrl } from '../../Constant'

function SingleVehicle() {
    const { mtr_slug } = useParams()
    const dispatch = useDispatch()
    const singleVehicle = useSelector(getSingleVehicleSlice)
    console.log("single vehicle", singleVehicle)

    useEffect(() => {
        dispatch(fetchSingleVehicle(mtr_slug))
    }, [dispatch, mtr_slug])


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
                    <h3 className='single-car-name'>{singleVehicle.mtr_title} </h3>
                    <p className='posting'>Posted 10 mints ago</p>
                    <img className='single-car-img' src={imageUrl + singleVehicle.mtr_image} alt='' />
                </div>

                <div className='overview'>
                    <h4>Item Overview</h4>

                    <Row style={{ width: "80%", paddingTop: "20px" }}>
                        <Col xs={12} md={2} sm={4} >
                            <div className='overview-row' >
                                <div className='overview-details'>
                                    <h6>MAKE</h6>
                                    <p style={{ fontFamily: "sans-serif", color: "red" }}></p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>MODEL</h6>
                                    <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{singleVehicle.plate_code} </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>CAPACITY/WEIGHT</h6>
                                    <p style={{ fontFamily: "sans-serif", width: "10rem" }}>{singleVehicle.mtr_warrenty} </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>KILOMETERS</h6>
                                    <img className='single-icons' src='/Images/Km.png' alt='' />
                                    <p style={{ fontFamily: "sans-serif", }}>{singleVehicle.mtr_warrenty} </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>WARRANTY</h6>
                                    <img className='single-icons' src='/Images/Warranty.png' alt='' />
                                    <p style={{ fontFamily: "sans-serif", }}>{singleVehicle.mtr_warrenty} </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <h4 className='heading-details'>Additional Details</h4>
                <div className='details-content'>
                    <Row>
                        <Col xs={12} md={6}>
                            <h6>Year</h6>
                            <h6>Body condition</h6>
                            <h6>Mechanical condition</h6>
                            <h6>Body Type</h6>
                            <h6>Body condition</h6>
                            <h6>Seller type</h6>
                            <h6>No. of Cylinders </h6>
                            <h6>Horsepower</h6>
                            <h6>Fuel Type</h6>
                        </Col>

                        <Col xs={12} md={6} className='fffff'>
                            <h6>{singleVehicle.mtr_mfd_year}  </h6>
                            <h6>{singleVehicle.mtr_mech_cond}</h6>
                            <h6>{singleVehicle.mtr_body_type}</h6>
                            <h6>{singleVehicle.mtr_body_cond}</h6>
                            <h6>{singleVehicle.mtr_body_cond}</h6>
                            <h6>Owner</h6>
                            <h6>{singleVehicle.mtr_cylinder}</h6>
                            <h6>{singleVehicle.mtr_horsepower}</h6>
                            <h6>{singleVehicle.mtr_fuel}</h6>
                        </Col>
                    </Row>
               <div>
                    <div className='description'>
              <h4 className='heading-details'>Description</h4>
              <p className='d-flex'>{singleVehicle.mtr_description} </p>
              <hr />
            </div>
          </div>
        </div>
        <div>
          <h4 className='heading-details'>Location </h4>
          <div className='d-flex flex-direction-row' >
            <img src='/Images/map.svg' alt='' />
            <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{singleVehicle.location_name}</p>
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

export default SingleVehicle