import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Container,Dropdown,Button,Pagination } from 'react-bootstrap'
import { imageUrl } from '../../Constant'
import DropDown from '../../Components/DropDown/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccessoriesSale, getAccessoriesSlice } from '../../Slices/SaleSlice'
import { useState } from 'react'


function AccessoriesSale() {
  const dispatch = useDispatch()
  const Accessories = useSelector(getAccessoriesSlice)
  console.log(Accessories,"Accessories");

  useEffect(()=>{
    dispatch(fetchAccessoriesSale(getAccessoriesSlice))
  },[dispatch])

  const itemsPerPage = 10;
  const [currentPage,setCurrentPage] = useState(1)
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex+itemsPerPage;
  const totalPage=Math.ceil(Accessories.length/itemsPerPage);
  const handlePageChange=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPage);
  };

  return (
    <Container>
    <img className='sale-img' src='/Images/home.jpeg' alt='' />
    <DropDown />
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
   
  
    {Accessories.slice(startIndex,endIndex).map((value) => {
         
          return (
            <Link className='car-link' to={`/single-acess/${value.mtr_slug}`}>
            <div className='mt-4 car-main-div'>
            <div>
              <Row>
                <Col xs={12} md={4}>
                  <img src={imageUrl + value.mtr_image} alt='' className='car-img' />
                </Col>

                <Col xs={12} md={8}>
                  <div className='car-details'>
                  <p className='sub-name d-flex'>Mercides Benz . S-Class</p>
                  <p className='service d-flex mt-4'>{value.mtr_brand_name} </p>

                    <h2 className='heading-name d-flex mt-4'>AED {value.mtr_price} </h2>

                    <div className='details-icons'>
                      <p>Usage: {value.mtr_mfd_year} </p>
                      <p>Condition: {value.mtr_km} Km</p>
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
         <Pagination className='justify-content-center mt-4'>
        <Pagination.First onClick={goToFirstPage} disabled={currentPage === 1} />
        <Pagination.Prev
        onClick={()=>handlePageChange(currentPage -1)}
        disabled={currentPage===1}/>
          {[...Array(totalPage)].map((_,index)=>(
            <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={()=>handlePageChange(index+1)}
            >
              {index+1}
            </Pagination.Item>

        ))}
        
        <Pagination.Next 
        onClick={()=>handlePageChange(currentPage + 1)}
        disabled={currentPage===totalPage}
        />
        <Pagination.Last onClick={goToLastPage} disabled={currentPage === totalPage} />
        </Pagination>
  </Container>
  )
}

export default AccessoriesSale