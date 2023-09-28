import React, { useEffect } from 'react'
import './NumberSale.css'
import { Container, Dropdown, Row, Col, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { imageUrl } from '../../Constant'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNumberSale, getNumberSlice } from '../../Slices/SaleSlice'
import DropdownDesign from '../../Components/DropDown/DropDown'

function NumberSale() {

const dispatch = useDispatch()
const number = useSelector(getNumberSlice)
console.log("number",number);

useEffect(()=>{
  dispatch(fetchNumberSale(getNumberSlice))
},[dispatch])
  return (
    <div>
      <Container>
        <img className='sale-img' src='/Images/home.jpeg' alt='' />
       {/* <DropdownDesign /> */}
       <Row>
          <Col xs={12} md={6}>
            <div className='mt-4 cell-div'>
              <h2 className='car-cell'>Buy and sell Number Plates Online  in Dubai, UAE.</h2>
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
            <p>Mercides-Benz(3923)</p>
          </div>
          <div className='car-category'>
            <p>Mercides-Benz(3923)</p>
          </div>
          <div className='car-category'>
            <p>Mercides-Benz(3923)</p>
          </div>
          <div className='car-category'>
            <p>Mercides-Benz(3923)</p>
          </div>
          <div className='car-category'>
            <p>Mercides-Benz(3923)</p>
          </div>
          <div className='car-category'>
            <p>Mercides-Benz(3923)</p>
          </div>
        </div>
       
      
        {number.map((value) => {
             
              return (
                <Link className='car-link' to={`/single-number/${value.mtr_slug}`}>
                <div className='mt-4 car-main-div'>
                <div>
                  <Row>
                    <Col xs={12} md={4}>
                      <img src={imageUrl + value.mtr_image} alt='' className='car-img' />
                    </Col>

                    <Col xs={12} md={8}>
                      <div className='car-details'>
                        <h2 className='heading-name d-flex'>AED {value.mtr_price} </h2>
                        <p className='sub-name d-flex'>Mercides Benz . S-Class</p>
                        <p className='service d-flex'>{value.mtr_cat} </p>

                        <div className='details-icons'>
                          <img className='icons' src='/Images/calendar.svg' alt='' />
                          <p>{value.mtr_mfd_year} </p>
                          <img className='icons' src='/Images/speedometer.svg' alt='' />
                          <p>{value.mtr_km} Km</p>
                          <img className='icons' src='/Images/steering-side.svg' alt='' />
                          <p>Left Hand Side</p>
                          <img className='icons' src='/Images/regional-specs.svg' alt='' />
                          <p>{value.mtr_rel_spec} </p>
                        </div>

                         <div className='cities'>
                          <img className='icons' style={{ width: "20px" }} src='/Images/map.svg' alt='' />
                          <p className='city-name d-flex'>Al Quoz, Dubai</p>
                        </div>

                      </div>
                    </Col>
                  </Row>
                </div>
                </div>
                </Link>
              )
             
            })}
        
      </Container>
      {/* <Pagination /> */}
    </div>
  )
}

export default NumberSale