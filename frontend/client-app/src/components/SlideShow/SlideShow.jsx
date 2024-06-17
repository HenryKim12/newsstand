import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./SlideShow.css"

function SlideShow({headlines, fetchHeadlineIndex}) {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleIndex = (selectedIndex, e) => {
    setSlideIndex(selectedIndex)
    fetchHeadlineIndex(selectedIndex)
  }

  return (
    <Carousel fade activeIndex={slideIndex} onSelect={handleIndex}>
        {headlines.slice(0,5).map((headline) => {
          return (
            <Carousel.Item className='carousel-item' key={headline._id}>
              <img
                className="carousel-img"
                src={headline.image_url}
                alt="First slide"
              />
              <Carousel.Caption >
                <h5 className='carousel-caption'>{headline.title.substring(0, headline.title.indexOf('-', headline.title.length - 50))}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
  )
}

export default SlideShow