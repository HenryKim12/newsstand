import React, { useState, useEffect } from 'react'
import "./ArticleWithImage.css"
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { useLocation } from "react-router-dom"
import HeartButton from '../HeartButton/HeartButton';

function ArticleWithImage({article}) {
  const [route, setRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname)
  }, [])

  return (
    <div className='article-img-container'>
        <div className='container-content'>
          <h6 style={{fontWeight: "bold"}}>
              {article.title}
          </h6>
          <p>{article.description}</p>
          <div className='buttons-container'>
            <ReadMoreButton url={article.url} />
            {route.length > 1 && 
            <HeartButton article={article} />
            }
          </div>
        </div>
        <img src={article.image_url} width={400}/>
    </div>
  )
}

export default ArticleWithImage