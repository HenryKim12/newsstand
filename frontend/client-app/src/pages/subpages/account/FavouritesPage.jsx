import React, { useState, useEffect } from 'react'
import "./FavouritesPage.css"
import apiClient from "../../../api/apiClient"

function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  const fetchFavourites = async () => {
    try {
      const response = await apiClient.get("/api/user/articles");
      const articles = response.data;
      setFavourites(articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFavourites();
  }, [])

  return (
    <div>
        <h5>Favourites</h5>
        {favourites.map((fav) => {
          return (
            <div>{fav.title}</div>
          )
        })}
    </div>
  )
}

export default FavouritesPage