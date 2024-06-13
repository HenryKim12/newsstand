import React from 'react'
import "./ArticleWithNoImage.css"

function ArticleWithNoImage({article}) {
  return (
    <div className='container'>
        <a href={article.url} target='_blank' style={{textDecoration: "none", color: "black"}}>
            <h6 style={{fontWeight: "bold"}}>{article.title}</h6>
        </a>
        <p>{article.description}</p>
    </div>
  )
}

export default ArticleWithNoImage