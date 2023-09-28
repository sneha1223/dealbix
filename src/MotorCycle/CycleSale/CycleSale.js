import React, { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Dropdown,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMotorSale, getMotorSlice } from '../../Slices/SaleSlice'
import { imageUrl } from '../../Constant'
import { Link } from 'react-router-dom'

function CycleSale() {

  const dispatch = useDispatch()
  const cycle = useSelector(getMotorSlice)
  console.log("cycle",cycle)

useEffect(()=>{
  dispatch(fetchMotorSale(getMotorSlice))
},[dispatch])
    return (
        <Container>

          <Row>
          <Col xs={12} md={6}>
            <div className='mt-4 cell-div'>
              <h2 className='car-cell'>Buy and sell cars in Dubai, UAE.</h2>
              <h6>27308 Ads</h6>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='mt-4 filter-buttons '>
              <Dropdown className='filter' style={{ border: "1px solid rgb(194, 184, 184)", borderRadius: "5px" }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Sort:Default
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Default</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Newest to oldest</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Oldest to newest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button className='filter' variant='light'>Save Search</Button>
            </div>
          </Col>
        </Row>

            <div className='cars'>
                <div className='car-category'>
                    <p>Off-Road(3923)</p>
                </div>
                <div className='car-category'>
                <p>Off-Road(3923)</p>
                </div>
                <div className='car-category'>
                <p>Off-Road(3923)</p>
                </div>
                <div className='car-category'>
                <p>Off-Road(3923)</p>
                </div>
                <div className='car-category'>
                <p>Off-Road(3923)</p>
                </div>
                <div className='car-category'>
                <p>Off-Road(3923)</p>
                </div>
            </div>
            {cycle.map((value)=>{
              return (
                <Link to={`/single-motor/${value.mtr_slug}`} style={{textDecoration:"none"}}>
                <div>
               <div className='mt-4 car-main-div'>
                <div>
                  <Row>
                    <Col xs={12} md={4}>
                      <img src={imageUrl + value.mtr_image} alt='' className='car-img' />
                    </Col>

                    <Col xs={12} md={8}>
                      <div className='car-details'>
                        <h2 className='heading-name d-flex'>AED{value.mtr_price}  </h2>
                        <p className='sub-name d-flex'>Mercides Benz . S-Class</p>
                        <p className='service d-flex'> </p>

                         <div className='cities'>
                          <img className='icons' style={{ width: "20px" }} src='/Images/map.svg' alt='' />
                          <p className='city-name d-flex'>Al Quoz, Dubai</p>
                        </div>

                      </div>
                    </Col>
                  </Row>
                </div>
                </div>
                </div>
                </Link>
              )
            })}
            
            {/* </div> */}
        </Container>
    )
}

export default CycleSale