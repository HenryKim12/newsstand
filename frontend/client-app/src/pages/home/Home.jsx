import React, { useEffect, useState } from 'react'
import "./Home.css"
import SlideShow from '../../components/SlideShow/SlideShow'
import apiClient from '../../api/apiClient'

function Home() {
  const [headlines, setHeadlines] = useState([])
  const [articles, setArticles] = useState([])

  const fetchHeadlines = async () => {
    try {
      const res = apiClient.get("/api/headlines")
      console.log(res)
      const headlines = res.data;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //fetchHeadlines()
  }, [])

  return (
    <div className='grid'>
        <div className='item-1'>
            <SlideShow />
        </div>
        <div className='item-2'>
          hello
          <button onClick={fetchHeadlines}>fetch headlines</button>
        </div>
        <div className='row-border'></div>

        <div className='item-3'>
          Recent News
        </div>
    </div>
  )
}

export default Home