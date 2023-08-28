import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Cards.css"

function Cards({ original_title, vote_average, release_date, overview, poster_path }){
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 1500)
  }, []) 

  return <>
  {
      isLoading
      ?
      <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton height={300} duration={2} />
          </SkeletonTheme>
      </div>
      :
          <div className="cards">
              <img className="cardImg" src={`https://image.tmdb.org/t/p/original${poster_path}`} />
              <div className="cardText">
                  <div className="cardTitle">{original_title}</div>
                  <div className="cardDate">
                      {release_date}
                      <span className="cardRating">{vote_average}<i className="fas fa-star" /></span>
                  </div>
                  <div className="cardDescription">{overview}</div>
              </div>
          </div>

  }
  </>
}

export default Cards
