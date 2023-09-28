import React, { useEffect, useState } from 'react'
import './Sale.css'
import { Container, Dropdown, Row, Col, Button, Pagination } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarSale, getCarSlice } from '../../Slices/SaleSlice'
import { imageUrl } from '../../Constant'
import DropDown from '../../Components/DropDown/DropDown'
import { fetchBrand, getbrandSlice } from '../../Slices/DropdownSlice'
import { getLocation,locationName } from '../../Slices/LocationSlice'


function Sale() {
  const {location_id} = useParams()
  const dispatch = useDispatch()

  const cars = useSelector(getCarSlice)
  console.log("cars", cars)

  useEffect(() => {
    dispatch(fetchCarSale(getCarSlice))
  }, [dispatch])


  const city = useSelector(getLocation)
  console.log("city",city)

  useEffect(()=>{
    dispatch(locationName(getLocation))
  },[dispatch])

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPage = Math.ceil(cars.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPage);
  };

  const carBrand = useSelector(getbrandSlice)
  console.log(carBrand, "car brand")

  useEffect(() => {
    dispatch(fetchBrand(getbrandSlice))
  }, [dispatch])

  return (
    <div>
      <Container>
        <img className='sale-img' src='/Images/home.jpeg' alt='' />
        {/* <DropDown /> */}
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
        {carBrand.slice(0, 10).map((item) => {
          return (
            
            <div className='car-category'>
              <p>{item.mtr_brand_name} </p>
            </div>
           
          )
        })}
         </div>
         <div className='cars'>
        <div className='car-category'>
              <p>View More </p>
            </div>
         </div>
 

        {cars.slice(startIndex, endIndex).map((value) => {

          return (
            <Link className='car-link' to={`/single/${value.mtr_slug}`}>
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
                        <p className='service d-flex'>{value.mtr_brand_name} </p>

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
                          <p className='city-name d-flex'>{city.city_name}</p>
                        </div>

                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Link>
          )

        })}
        <Pagination className='justify-content-center mt-4'>
          <Pagination.First onClick={goToFirstPage} disabled={currentPage === 1} />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1} />
          {[...Array(totalPage)].map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>

          ))}

          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
          />
          <Pagination.Last onClick={goToLastPage} disabled={currentPage === totalPage} />
        </Pagination>
      </Container>
    </div>
  )
}

export default Sale






