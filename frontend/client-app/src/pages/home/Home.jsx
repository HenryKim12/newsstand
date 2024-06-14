import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Home.css"
import SlideShow from '../../components/SlideShow/SlideShow'
import apiClient from '../../api/apiClient'
import ArticleWithImage from '../../components/ArticleWithImage/ArticleWithImage';
import ArticleWithNoImage from '../../components/ArticleWithNoImage/ArticleWithNoImage';
import ReadMoreButton from '../../components/ReadMoreButton/ReadMoreButton';
import Button from "react-bootstrap/Button"
import Category from '../../components/Category/Category'

function Home() {
  const [headlines, setHeadlines] = useState([])
  const [articles, setArticles] = useState([])
  const [headlineIndex, setHeadlineIndex] = useState(0)

  const navigate = useNavigate();

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
            <p className='bolded-title'>{headlines[headlineIndex].source}: {headlines[headlineIndex].publish_date.substring(0, 10)}</p>
          </div>
          <p>{headlines[headlineIndex].description}</p>
          <ReadMoreButton url={headlines[headlineIndex].url} />
        </div>}

        <div className='row-border'></div>

        <div className='item-3'>
          <h5>POPULAR NEWS</h5>
          {articles.length > 0 && 
          <ArticleWithImage article={articles[0]} />
          }

          <hr />
          {articles.length > 0 && 
          <ArticleWithNoImage article={articles[1]} />
          }   
          <hr />

          {articles.length > 0 &&
            <div className='section-3'>
              <div className='section-3-1'>
                <h6 className='bolded-title'>{articles[2].title}</h6>
                <p>{articles[2].description}</p>
                <ReadMoreButton url={articles[2].url} />
              </div>
              <div className='vl'></div>
              <div className='section-3-2'>
                <div className='section-3-2-content'>
                  <h6 className='bolded-title' style={{marginBottom: "50px"}}>{articles[3].title}</h6>
                  <ReadMoreButton url={articles[3].url} />
                </div>
                <img src={articles[3].image_url} width={200} height={200} style={{justifyContent: 'center'}} />
              </div>
            </div>
          }
          <hr />

          {articles.length > 0 && 
          <ArticleWithImage article={articles[4]} />
          }
        </div>

        <div className='item-4'>
          <h5 style={{marginBottom: "1rem"}}>OPINIONS</h5>  
          {articles.length > 0 && 
          <div>
            <div>
              <h6>{articles[5].author}</h6>
              <a href={articles[5].url} target='_blank'>
                <h6 className='bolded-title'>{articles[5].title}</h6>
              </a>
            </div>  
            <hr />
            <div>
              <h6>{articles[6].author}</h6>
              <a href={articles[5].url} target='_blank'>
                <h6 className='bolded-title'>{articles[6].title}</h6>
              </a>
            </div>  
            <hr />
            <div>
              <h6>{articles[7].author}</h6>
              <a href={articles[5].url} target='_blank'>
                <h6 className='bolded-title'>{articles[7].title}</h6>
              </a>
            </div>  
          </div>
          }
          <div className='row-border' style={{marginBottom: "2rem"}}></div>

          <div>
            {articles.length > 0 && 
              <div className='item-5'>
                <img src={articles[8].image_url} width={"100%"} style={{display: "flex", flexDirection: "row", justifyContent: "center"}} />
                <h6 className='bolded-title'>{articles[8].title}</h6>
                <p>{articles[8].description}</p>
              </div>
            }
          </div>
          <div className='row-border' style={{marginBottom: "2rem"}}></div>

          <div>
            {articles.length > 0 && 
            <div>
              <h5 style={{marginBottom: "1rem"}}>IN CASE YOU MISSED IT</h5>
              <div className='item-6'>
                <div>
                  <h6 className='bolded-title' style={{marginBottom: "2rem"}}>{articles[9].title}</h6>
                  <ReadMoreButton url={articles[9].url} />
                </div>
                <img src={articles[9].image_url} style={{borderRadius: "50%", height: "100px", maxWidth: "100%"}} />
              </div>
            </div>
            }
          </div>
        </div>
        <div className='row-border-2' style={{marginTop: "1rem"}}></div>

        <div className='subscribe-section'>
          <h5 className='bolded-title' style={{marginBottom: "2rem"}}>Sign up to get latest stories</h5>
          <Button variant="dark" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
          <hr style={{marginTop: "2rem"}}/>
        </div>

        <div className='categories'>
          <Category topic="Sport" list={["Soccer", "Football", "Basketball"]} />
          <Category topic="Arts" list={["Design", "Books", "Pop Culture"]} />
          <Category topic="Living" list={["Automotive", "Games", "Food"]} />
          <Category topic="Technology" list={["Software/Apps", "AI", "Devices"]} />
          <Category topic="Health" list={["Medical Research", "Diseases", "Mental Health"]} />
        </div>

    </div>
  )
}

export default Home