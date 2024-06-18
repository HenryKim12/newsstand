import React, { useState, useEffect } from 'react'
import "./FavouritesPage.css"
import apiClient from "../../../api/apiClient"
import FavouriteCard from '../../../components/FavouriteCard/FavouriteCard';
import LoadingIndicator from '../../../components/LoadingIndicator/LoadingIndicator';

function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchFavourites = async () => {
    try {
      const response = await apiClient.get("/api/user/articles");
      const articles = response.data;
      setFavourites(articles)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFavourites();
  }, [])

  if (loading) {
    <LoadingIndicator />
  }

  return (
    <div className='fav-container'>
      <h1 style={{margin: "1rem"}}>FAVOURITES</h1>
      {favourites.length > 0 ? 
      <div className='fav-list'>
        {favourites.map((fav) => {
          return (
            <FavouriteCard id={fav._id} title={fav.title} description={fav.description} url={fav.url} image_url={fav.image_url} />
          )
        })}
      </div> :
      <h5 style={{margin: "1rem"}}>No favourites</h5>
      }
    </div>
  )
}

export default FavouritesPage