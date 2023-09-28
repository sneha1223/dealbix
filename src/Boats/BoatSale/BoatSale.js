import React, { useEffect } from 'react'
import './BoatSale.css'
import { Col,Row,Container,Dropdown,Button } from 'react-bootstrap'
import DropDown from '../../Components/DropDown/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBoatSale, getBoatSlice } from '../../Slices/SaleSlice'
import { Link } from 'react-router-dom'
import { imageUrl } from '../../Constant'

function BoatSale() {
  
  const dispatch = useDispatch()
  const boatSale = useSelector(getBoatSlice)
  console.log("Boat Sale",boatSale);

  useEffect(()=>{
    dispatch(fetchBoatSale(getBoatSlice))
  },[dispatch])
  return (
   <div>
     <Container>
        <img className='sale-img' src='/Images/home.jpeg' alt='' />
        <DropDown />
       <Row>
          <Col xs={12} md={6}>
            <div className='mt-4 cell-div'>
              <h2 className='car-cell'>Buy and sell Boats in Dubai, UAE.</h2>
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
       
      
        {boatSale.map((value) => {
             
              return (
                <Link className='car-link' to={`/single-boat/${value.mtr_slug}`}>
                <div className='mt-4 car-main-div'>
                <div>
                  <Row>
                    <Col xs={12} md={4}>
                      <img src={imageUrl + value.mtr_image} alt='' className='car-img' />
                    </Col>

                    <Col xs={12} md={8}>
                      <div className='car-details'>
                      <p className='sub-name d-flex'>{value.mtr_title} </p>
                      <p className='service d-flex'>{value.mtr_brand_name} </p>
                        <h2 className='heading-name d-flex'>AED {value.mtr_price} </h2>
                        <div className='boat-data'>
                        <p className='boat d-flex'>Age:{value.boat_age} </p>
                        <p className='boat d-flex'>Length:{value.boat_length}</p>
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
   </div>
    
  )
}

export default BoatSale
