import React, { useState, useEffect } from 'react'
import "./SubPageLayout.css"
import apiClient from '../api/apiClient';
import ArticleWithImage from '../components/ArticleWithImage/ArticleWithImage';
import ArticleWithNoImage from '../components/ArticleWithNoImage/ArticleWithNoImage';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';

function SubPageLayout({title, query}) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArticlesByPageTopic = async () => {
        try {
            const res = await apiClient.post("/api/articles", {q: query});
            const articles = res.data;
            console.log("Query for " + {query} + ": " + articles)
            setArticles(articles)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchArticlesByPageTopic();
    }, [])

    if (loading) {
        <LoadingIndicator />
    }

  return (
    <div className='subpage-container'>
        <h1 className='sp-title'>{title}</h1>
        {articles.length > 0 ? 
            <div>
                <h6 style={{marginBottom: "2rem"}}>{articles.length} RESULTS</h6>
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
            :
            <div>
                0 RESULTS
            </div>
        }
    </div>
  )
}

export default SubPageLayout