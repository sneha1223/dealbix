import React, { useEffect } from 'react'
import './Motor.css'
import { Button, Container, Form,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncCategories, getCategories } from '../../Slices/CategorySlice'

function Motors() {

    const dispatch = useDispatch()
    const mainCategories = useSelector(getCategories)
    console.log("MainCategories", mainCategories);

    useEffect(() => {
        dispatch(fetchAsyncCategories(getCategories))
    }, [dispatch])
    return (
        <Container>
            <div>
                <img className='motor-img' src='/Images/Image27.png' alt='' />
                {/* <div>
                    <h2 className='img-heading '>The UAE's leading marketplace to buy<br /> and sell cars</h2>
                    <div className=''>
                        <Form.Control className='keyword' size="lg" type="text" placeholder="Enter KeyWord" />
                    </div>
                </div> */}
            </div>
            
                <Row>
                <div className='button-grp'>
                       <Link to='/sale'>
                            <Button variant='light' className='buttons'>
                                <p>Used Cars for Sale</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>

                        <Link to='/number'>
                            <Button variant='light' className='buttons'>
                                <p>Number Plate</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>

                        <Link to='/accessories'>
                            <Button variant='light' className='buttons'>
                                <p>auto accessories & parts</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>

                        <Link to='/motorcycle'>
                            <Button variant='light' className='buttons'>
                                <p>MotorCycle</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>

                        <Link to='/vehicles'>
                            <Button variant='light' className='buttons'>
                                <p>Heavy vehicles</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>

                        <Link to='/boats'>
                            <Button variant='light' className='buttons'>
                                <p>Boats</p>
                                <h4>145285</h4>
                            </Button>
                        </Link>
                        </div>
                        </Row>
                    
            </Container>
    )
}

export default Motors