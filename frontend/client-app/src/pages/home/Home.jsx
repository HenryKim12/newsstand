import React, { useEffect, useState } from 'react'
import "./Home.css"
import SlideShow from '../../components/SlideShow/SlideShow'
import apiClient from '../../api/apiClient'
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  const [headlines, setHeadlines] = useState([])
  const [articles, setArticles] = useState([])
  const [headlineIndex, setHeadlineIndex] = useState(0)

  const fetchHeadlines = async () => {
    try {
      const res = await apiClient.get("/api/headlines")
      const headlines = res.data;
      setHeadlines(headlines)
      console.log(headlines)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchHeadlineIndex = (slideIndex) => {
    setHeadlineIndex(slideIndex)
  }

  useEffect(() => {
    fetchHeadlines()
  }, [])

  return (
    <div className='grid'>
        <div className='item-1'>
            <SlideShow headlines={headlines} fetchHeadlineIndex={fetchHeadlineIndex} />
        </div>

        {headlines.length > 0 && 
        <div className='item-2'>
          <div>
            <p>{headlines[headlineIndex].author}</p>
            <p>{headlines[headlineIndex].publish_date}</p>
          </div>
          <p>{headlines[headlineIndex].description}</p>
          <div>
            <a href={headlines[headlineIndex].url} className='headline-link'> 
              Read More 
            </a>
            <FaLongArrowAltRight />
          </div>

        </div>}

        <div className='row-border'></div>

        <div className='item-3'>
          POPULAR NEWS
        </div>
    </div>
  )
}

export default Home