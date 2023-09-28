import React, { useEffect, useState } from 'react'
import './Dropdown.css'
import { Dropdown, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrand, getbrandSlice } from '../../Slices/DropdownSlice'
import BrandDropdown from './BrandDropdown'

function DropDown() {

  const [selectedButton, setSelectedButton] = useState(null); // State to manage selected button

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const isButtonSelected = (buttonIndex) => {
    return selectedButton === buttonIndex;
  };


  const dispatch = useDispatch()
  const brands = useSelector(getbrandSlice);
  console.log("Brands", brands)

  useEffect(() => {
    dispatch(fetchBrand(getbrandSlice))
  }, [dispatch])
  return (
    <div className='container'>
      <div className='dropdown-div'>
        <Row >
          <Col xs={12} md={2}>
            <Dropdown className='single-button'>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>City <br />
                  <span><h6 className='drp-sub-text'>Dubai</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <div className='details-div'>
                  <div className='fst-row'>
                    <button
                      className={`dropdown-btn ${isButtonSelected(0) ? 'selected' : ''}`}
                      onClick={() => handleButtonClick(0)}>Dubai</button>
                    <button
                      className={`dropdown-btn ${isButtonSelected(1) ? 'selected' : ''}`}
                      onClick={() => handleButtonClick(1)}>All Cities</button>
                    <button
                      className={`dropdown-btn ${isButtonSelected(2) ? 'selected' : ''}`}
                      onClick={() => handleButtonClick(2)}>Abu Dhabi</button>
                  </div>
                </div>
                <div className='second-row'>
                  <button
                    className={`dropdown-btn ${isButtonSelected(3) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(3)}>Ras Al Khaimah</button>
                  <button className={`dropdown-btn ${isButtonSelected(8) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(8)}>Sharjah</button>
                </div>

                <div className='third-row'>
                  <button
                    className={`dropdown-btn ${isButtonSelected(4) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(4)}>Fujirah</button>
                  <button
                    className={`dropdown-btn ${isButtonSelected(5) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(5)}>Ajman</button>
                </div>

                <div className='fourth-row'>
                  <button
                    className={`dropdown-btn ${isButtonSelected(6) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(6)}>Umm Al Quwain</button>
                  <button
                    className={`dropdown-btn ${isButtonSelected(7) ? 'selected' : ''}`}
                    onClick={() => handleButtonClick(7)}>Al Ain</button>
                </div>

                <Button className='filter-btn'>Apply Filters</Button>
              </Dropdown.Menu>
            </Dropdown>

          </Col>

          {/* <Col xs={12} md={2}>
            <BrandDropdown />
          </Col> */}
          <Col xs={12} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>Make <br />
                  <span><h6 className='drp-sub-text'>eg:Toyota</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <div className='scrollable-container'>
               
                 {brands.map((value, key) => {
                      return (
                      <div className="content">
                         <Dropdown.Item>
                          <p value={key} >{value.mtr_brand_name}</p>
                          </Dropdown.Item>
                        </div>

                      )
                    })}
                
                
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>



          <Col xs={12} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>Price (AED) <br />
                  <span><h6 className='drp-sub-text'>Select</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className='price-div'>
                  <div className='from'>
                    <h5>From</h5>
                    <input type='number'></input>
                  </div>
                  <div className='upto'>
                    <h5>Upto</h5>
                    <input type='number'></input>
                  </div>
                </div>

                <div className='price-scnd'>
                  <button className='clear'>Clear</button>
                  <Button className='filter-price'>Apply Filteres</Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={12} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>Year <br />
                  <span><h6 className='drp-sub-text'>Select</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className='price-div'>
                  <div className='from'>
                    <h5>From</h5>
                    <input type='number'></input>
                  </div>
                  <div className='upto'>
                    <h5>Upto</h5>
                    <input type='number'></input>
                  </div>
                </div>

                <div className='price-scnd'>
                  <button className='clear'>Clear</button>
                  <Button className='filter-price'>Apply Filteres</Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={12} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>Kilometers <br />
                  <span><h6 className='drp-sub-text'>select</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className='price-div'>
                  <div className='from'>
                    <h5>From</h5>
                    <input type='number'></input>
                  </div>
                  <div className='upto'>
                    <h5>Upto</h5>
                    <input type='number'></input>
                  </div>
                </div>

                <div className='price-scnd'>
                  <button className='clear'>Clear</button>
                  <Button className='filter-price'>Apply Filteres</Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={12} md={2}>
            <Dropdown>
              <Dropdown.Toggle variant='light' id="dropdown-basic" className='single-button'>
                <h5 className='drp-text'>Filters <br />
                  <span><h6 className='drp-sub-text'>Regional specs,Keyword,etc.</h6></span>
                </h5>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default DropDown

