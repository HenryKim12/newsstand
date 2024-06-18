import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import apiClient from '../../api/apiClient';
import PopUp from "../Popup/Popup"

function HeartButton({article}) {
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleFavouriting = async () => {
        try {
            const response = await apiClient.post("/api/user/articles", {id: article._id});
            setShowErrorPopup(false)
            setShowSuccessPopup(true)
        } catch (error) {
            console.log(error)
            setShowErrorPopup(true)
            setShowSuccessPopup(false)
            setErrorMessage(error.response.data.message)
        }
        console.log(showSuccessPopup, showErrorPopup)
    }

    const handlePopup = (childShow) => {
        setShowErrorPopup(childShow)
        setShowSuccessPopup(childShow)
    }

  return (
    <div>
        {showErrorPopup && 
        <PopUp handlePopup={handlePopup} title="Oops..." message={errorMessage}/>        
        }
        {showSuccessPopup && 
        <PopUp handlePopup={handlePopup} title="Success" message="Successfully added to favourites!"/>  
        }
        <button style={{background: "none", border: "none"}} onClick={handleFavouriting} >
            <FaRegHeart />
        </button>
    </div>
  )
}

export default HeartButton