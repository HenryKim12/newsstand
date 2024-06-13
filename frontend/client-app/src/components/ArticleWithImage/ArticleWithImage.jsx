import React from 'react'
import "./ArticleWithImage.css"
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';

function ArticleWithImage({article}) {
  return (
    <div className='article-img-container'>
        <div className='container-content'>
            <h6 style={{fontWeight: "bold"}}>
                {article.title}
            </h6>
            <p>{article.description}</p>
            <ReadMoreButton url={article.url} />
        </div>
        <img src={article.image_url} width={400}/>
    </div>
  )
}

export default ArticleWithImage