import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ReactOwlCarousel from 'react-owl-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFetauredList, getFeaturedList } from './Slices/CategorySlice'
import { imageUrl } from './Constant'

function OwlCarousel() {
    const dispatch = useDispatch()
    const show = useSelector(getFeaturedList)
    console.log("show",show);

    useEffect(()=>{
        dispatch(fetchFetauredList(getFeaturedList))
    },[dispatch])
  return (
   <Container>
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

{show.map((value)=>{
    return(
        <div>
            <img src={imageUrl + value.mtr_image}/>
        </div>
    )
})}
      </ReactOwlCarousel>
   </Container>
  )
}

export default OwlCarousel