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
    } catch (error) {
      console.log(error)
    }
  }

  const fetchHeadlineIndex = (slideIndex) => {
    setHeadlineIndex(slideIndex)
  }

  const fetchArticles = async () => {
    try {
      const res = await apiClient.get("/api/articles")
      console.log(res)
      const articles = res.data;
      setArticles(articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchHeadlines();
    fetchArticles();
  }, [])

  return (
    <div className='grid'>
        <div className='item-1'>
            <SlideShow headlines={headlines} fetchHeadlineIndex={fetchHeadlineIndex} />
        </div>

        {headlines.length > 0 && 
        <div className='item-2'>
          <div>
            <p style={{fontWeight: "bold"}}>{headlines[headlineIndex].source}: {headlines[headlineIndex].publish_date.substring(0, 10)}</p>
          </div>
          <p>{headlines[headlineIndex].description}</p>
          <div style={{border: "1px solid black", width: "130px", padding: "5px"}}>
            <a href={headlines[headlineIndex].url} className='headline-link'> 
              Read More 
            </a>
            <FaLongArrowAltRight />
          </div>
        </div>}

        <div className='row-border'></div>

        <div className='item-3'>
          <h5>POPULAR NEWS</h5>
          {articles.length > 0 && 
          <div>
            {articles.splice(0, 8).map((article) => {
              return (
                <div>
                  {article.author}
                </div>
              )  
            })}
          </div>
          }
        </div>
    </div>
  )
}

export default Home