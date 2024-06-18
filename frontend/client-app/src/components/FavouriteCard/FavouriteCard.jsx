import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ReadMoreButton from "../ReadMoreButton/ReadMoreButton"
import { FaRegTrashCan } from "react-icons/fa6";
import "./FavouriteCard.css"
import apiClient from '../../api/apiClient';
import Popup from "../Popup/Popup"
import { useNavigate } from "react-router-dom"

function FavouriteCard({id, title, description, url, image_url}) {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false)

    const removeFavourite = async () => {
        try {
            const response = await apiClient.delete(`/api/user/articles/${id}`);
            setShowPopup(true)
        } catch (error) {
            console.log(error)
        }
    }

    const handlePopup = (childShow) => {
        setShowPopup(childShow)
        navigate(0)
    }

  return (
    <Card style={{ width: '18rem' }}>
      {showPopup && <Popup handlePopup={handlePopup} title="Success" message={"Successfully removed article from favourites"} />}
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className='fav-buttons'>
            <ReadMoreButton url={url} />
            <button style={{background: "none", border: "none"}} onClick={removeFavourite}>
                <FaRegTrashCan />
            </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default FavouriteCard