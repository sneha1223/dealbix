import React from 'react'
import './Motor.css'
import { Button, Container,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Motors() {
    return (
        <Container>
            <div>
                <img className='motor-img' src='/Images/home.jpeg' alt='' />
                <div>
                    <h2 className='img-heading '>The UAE's leading marketplace to buy<br/> and sell cars</h2>
                    <div className=''>
                    <Form.Control className='keyword' size="lg" type="text" placeholder="Enter KeyWord" />
                    </div>
                </div>
            </div>
            <div className='button-grp'>
                <Link to='/sale'>
                <Button  variant='light' className='buttons'>
                    <p>Used cars for Sale</p>
                    <h4>24,6456</h4>
                </Button>
                </Link>

                <Button variant='light' className='buttons'>
                    <p>Number Plates</p>
                    <h4>24,6456</h4>
                </Button>
                <Button variant='light' className='buttons'>
                    <p>Auto accessories & parts </p>
                    <h4>24,6456</h4>
                </Button>
                <Button variant='light' className='buttons'>
                    <p>Motor cycles</p>
                    <h4>24,6456</h4>
                </Button>
                <Button variant='light' className='buttons'>
                    <p>Heavy vehicles</p>
                    <h4>24,6456</h4>
                </Button>
                <Button variant='light' className='buttons'>
                    <p>boats</p>
                    <h4>24,6456</h4>
                </Button>
            </div>
        </Container>
    )
}

export default Motors