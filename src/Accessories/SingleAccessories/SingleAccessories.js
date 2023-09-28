import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleAccessories, getSingleAccessories } from '../../Slices/SingleSlice'
import { useParams } from 'react-router-dom'
import { imageUrl } from '../../Constant'

function SingleAccessories() {
    const { mtr_slug } = useParams()
    const dispatch = useDispatch()
    const SingleAcess = useSelector(getSingleAccessories)
    console.log("Single Acess", SingleAcess);

    useEffect(() => {
        dispatch(fetchSingleAccessories(mtr_slug))
    }, [dispatch], mtr_slug)
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
                    <h3 className='single-car-name'>{SingleAcess.mtr_title} </h3>
                    <p className='posting'>Posted 10 mints ago</p>
                    <img className='single-car-img' src={imageUrl + SingleAcess.mtr_image} alt='' />
                </div>


                <div className='overview'>
                    <h4>Item Overview</h4>

                    <Row style={{ width: "80%", paddingTop: "20px" }}>
                        <Col xs={12} md={2} sm={4} >
                            <div className='overview-row' >
                                <div className='overview-details'>
                                    <h6>USAGE</h6>
                                    <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{SingleAcess.motor_usage} </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>CONDITION</h6>
                                    <p style={{ fontFamily: "sans-serif", marginTop: "20px" }}>{SingleAcess.mtr_body_cond} </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={2} sm={4}>
                            <div className='overview-row'>
                                <div className='overview-details'>
                                    <h6>SELLER TYPE</h6>
                                    <p style={{ fontFamily: "sans-serif", paddingTop: "20px" }}>Owner</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='description'>
                    <h4 className='heading-details'>Description</h4>
                    <p className='d-flex'>{SingleAcess.mtr_description} </p>
                    <hr />
                </div>


                <div>
                    <h4 className='heading-details'>Location </h4>
                    <div className='d-flex flex-direction-row' >
                        <img src='/Images/map.svg' alt='' />
                        <p style={{ paddingLeft: "15px", marginBottom: "1px" }}>{SingleAcess.location_name}</p>
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

export default SingleAccessories