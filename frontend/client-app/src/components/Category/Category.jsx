import React from 'react'
import "./Category.css"
import { useNavigate } from 'react-router-dom'

function Category({topic, list}) {
    const navigate = useNavigate();

  return (
    <div className='category-container'>
        <h6 className="category-topic">{topic}</h6>
        <ul className='category-list'>
            {list.map((item) => {
                return (
                    <li className='category-item'>
                        <a href="" onClick={() => navigate(`/search/${item.toLowerCase()}`)}>{item}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Category