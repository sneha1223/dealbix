import React, { useEffect } from 'react'
import './Similar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { fetchFetauredList, getFeaturedList } from '../../Slices/CategorySlice'
import { imageUrl } from '../../Constant'
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function SimilarAds() {
  const dispatch = useDispatch()
  const ads = useSelector(getFeaturedList)
  console.log("ads", ads)

  useEffect(() => {
    dispatch(fetchFetauredList(getFeaturedList))
  }, [dispatch])
  return (
    <div>
      <h2 className='similar-ads'>similar ads </h2>
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
        {ads.map((value) => {
          return (
            <div>
              <Link to={`/single/${ads.mtr_slug}`} className='single-link'>
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


          )
        })}
      </OwlCarousel>
      {/* <Listings /> */}
    </div>
  )
}

export default SimilarAds