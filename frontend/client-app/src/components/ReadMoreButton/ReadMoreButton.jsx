import React from 'react'
import "./ReadMoreButton.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function ReadMoreButton({url}) {
  return (
    <div style={{border: "1px solid black", width: "130px", padding: "5px"}}>
        <a href={url} target='_blank' className='link'> 
            <h6>Read More</h6>
            <FaLongArrowAltRight />
        </a>
    </div>
  )
}

export default ReadMoreButton