import React, { useEffect } from 'react'
import './Listing.css'
import { Card, Container ,Col,Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFetauredList, getFeaturedList } from '../../Slices/CategorySlice'
import { imageUrl } from '../../Constant'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Listings() {

  const dispatch = useDispatch()
  const list = useSelector(getFeaturedList)
  console.log("list", list)

  useEffect(() => {
    dispatch(fetchFetauredList(list))
  }, [dispatch])

  return (
    <Container>
    <div>
      <h2 className='listing'> Featured List</h2>
      <OwlCarousel
      autoplay
        loop
        items={4}
        margin={2}
        responsive={{
          0: {
            items: 1 // Number of items to show on small screens
          },
          768: {
            items: 2 // Number of items to show on medium screens
          },
          1024: {
            items: 4// Number of items to show on large screens
          }
         }}
      >
        {/* <div className='card-div' > */}
          {list.map((value) => {
            return (
              <Row>
          <Col xs={12} md={2}>
              <div>
                <Link to={`/single/${value.mtr_slug}`} className='single-link'>
                  <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={imageUrl + value.mtr_image} />
                    <Card.Body>
                      <Card.Title className='title'>AED {value.mtr_price} </Card.Title>
                      <Card.Text style={{ textAlign: "start", fontSize: "20px", height: "140px" }}>
                        {value.mtr_title}
                        <p className='sub-text'> Year: {value.mtr_mfd_year} . KM: {value.mtr_km} </p>
                      </Card.Text>
                      <Card.Text className='text-grp' >
                        <p>Al mumzar</p>
                        <p>11 mins</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
              </Col>
              </Row>
            )
          })}
        {/* </div> */}
        </OwlCarousel>
        {/* </ReactOwlCarousel> */}


    </div>

     </Container>
  )
}

export default Listings

{/* <div>
<h2 className='cat-heading'>Accessories</h2>
<ReactOwlCarousel
loop
autoplay
items={4}
dots={true}
smartSpeed={1000}
// autoplaySpeed={800}
slideSpeed={200}
margin={10}
responsive={{
 0: {
   items: 2, // Display 2 items in a single window for smaller screens
 },
 576: {
   items: 4, // Display 4 items in a single window for screens >= 576px
 },
 768: {
   items: 6, // Display 6 items in a single window for screens >= 768px
 },
}}
>
{Accessories.map((value,index)=>{
   return (
       <div key={index} className='product-box'>
      <Link className='link-products' to={`/product/${value.product_id}`}>
     <div className="product-image">
       <img src={thumbImgUrl + value.product_image} alt={value.product_name} />
     </div>
     <div className="product-details">
       <p>{value.product_name}</p>
       <Button variant="primary" className="view-button">View</Button>
     </div>
     </Link>
       </div>
   )
})}
   </ReactOwlCarousel>
</div> */}