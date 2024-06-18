import React, { useState, useEffect } from 'react'
import "./ArticleWithNoImage.css"
import HeartButton from '../HeartButton/HeartButton'
import { useLocation } from "react-router-dom"

function ArticleWithNoImage({article}) {
  const [route, setRoute] = useState("")
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname)
  }, [])

  return (
    <div className='article-noimg-container'>
      {route.length > 1 && 
      <HeartButton article={article} />
      }
      <a href={article.url} target='_blank' style={{textDecoration: "none", color: "black"}}>
          <h6 style={{fontWeight: "bold"}}>{article.title}</h6>
      </a>
      <p>{article.description}</p>
    </div>
  )
}

export default ArticleWithNoImage