import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carrusel.css"


function Home(){

  const[popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=3b4695ba5913340c50326e95da463ec9")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
  },[])

  return (
    <>
      <section className="carrusel bg-dark">
        <Carousel 
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}>
            {
            popularMovies.map(movie => (
              <section key={1}>
                <section id="carruselImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </section>
                <section id="posterText">
                  <div id="title">{movie ? movie.original_title: ""}</div>
                  <div id="date">
                      {movie ? movie.release_date : ""}
                      <span id="rating">
                          {movie ? movie.vote_average :""}
                      </span>
                  </div>
                  <div id="description">{movie ? movie.overview : ""}</div>
                </section>
              </section>
            ))}
          </Carousel>
      </section>
      
    </>
  )
}

export default Home