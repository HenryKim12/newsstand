import React, { useState, useEffect } from 'react'
import "./SubPageLayout.css"
import apiClient from '../api/apiClient';
import ArticleWithImage from '../components/ArticleWithImage/ArticleWithImage';
import ArticleWithNoImage from '../components/ArticleWithNoImage/ArticleWithNoImage';

function SubPageLayout({title, query}) {
    const [articles, setArticles] = useState([]);

    const fetchArticlesByPageTopic = async () => {
        try {
            const res = await apiClient.post("/api/articles", {q: query});
            const articles = res.data;
            setArticles(articles)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchArticlesByPageTopic();
    }, [])

  return (
    <div className='container'>
        <h1>{title}</h1>
        {articles.length > 0 && 
            <div>
                {articles.map((article, index) => {
                    return (
                        <div>
                            {index % 3 == 0 ?
                                <div> 
                                    <ArticleWithImage article={article} />
                                </div>
                                :
                                <div>
                                    <ArticleWithNoImage article={article} />
                                </div>
                            }
                            <hr />
                        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default SubPageLayout