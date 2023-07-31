import React from 'react'
import './Listing.css'
import { Card, Container } from 'react-bootstrap'

function Listings() {
  return (
    <div>
        <Container>
            <div>
        <h2 className='listing'>Featured Listing</h2>
        <div className='card-div'>
    <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="/Images/car1.jpeg" />
      <Card.Body>
        <Card.Title className='title'>AED 12,500</Card.Title>
        <Card.Text style={{textAlign:"start"}}>
          Some quick example text to build on the card title and make up the
          <p className='sub-text'> Year: 2022 . KM: 20,000</p>
        </Card.Text>
        <Card.Text className='text-grp' >
          <p>Al mumzar</p>
          <p>11 mins</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="/Images/car1.jpeg" />
      <Card.Body>
        <Card.Title className='title'>AED 12,500</Card.Title>
        <Card.Text style={{textAlign:"start"}}>
          Some quick example text to build on the card title and make up the
          <p className='sub-text'> Year: 2022 . KM: 20,000</p>
        </Card.Text>
        <Card.Text className='text-grp' >
          <p>Al mumzar</p>
          <p>11 mins</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


      <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="/Images/car1.jpeg" />
      <Card.Body>
        <Card.Title className='title'>AED 12,500</Card.Title>
        <Card.Text style={{textAlign:"start"}}>
          Some quick example text to build on the card title and make up the
          <p className='sub-text'> Year: 2022 . KM: 20,000</p>
        </Card.Text>
        <Card.Text className='text-grp' >
          <p>Al mumzar</p>
          <p>11 mins</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }} className='cards'>
      <Card.Img variant="top" src="/Images/car1.jpeg" />
      <Card.Body>
        <Card.Title className='title'>AED 12,500</Card.Title>
        <Card.Text style={{textAlign:"start"}}>
          Some quick example text to build on the card title and make up the
          <p className='sub-text'> Year: 2022 . KM: 20,000</p>
        </Card.Text>
        <Card.Text className='text-grp' >
          <p>Al mumzar</p>
          <p>11 mins</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
        </div>
        </Container>
       
    </div>
  )
}

export default Listings