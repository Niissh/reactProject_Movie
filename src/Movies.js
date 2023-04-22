import React, { useState } from 'react';
import { useGlobalContext } from "./context";
import { NavLink } from 'react-router-dom';
import Modal from './Components/Modal';
import { FaStar } from "react-icons/fa";

const colors = {
  yellow: "#FFFF00",
  grey: "#808080"
}
const Movies = () => {
  const { movie } = useGlobalContext();
  const [openModal, setOpenModal] = useState(false);
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [currMovie,setCurrMovieValue] = useState(undefined);

  // let ratingMovies = {};
  // movie.forEach((_,i) => {
  //   ratingMovies[i] = 0;
  // });

  const [ratingMovie,setRatingMovie] = useState(Array(movie.length).fill(0));
  
  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {movie.map((curMovie,i) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0, 15);
          const handleClick = value => {
            ratingMovie[currMovie] = value;
            setRatingMovie(ratingMovie);
            setCurrentValue(value);
          };
          const handleMouseOver = value => {
            ratingMovie[currMovie] = value;
            setRatingMovie(ratingMovie);
            setHoverValue(value)
          };
          const handleMouseLeave = () => {
            setCurrMovieValue(undefined);
            setHoverValue(undefined)
          }

          return (
            // <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <>
              <NavLink key={imdbID}>
                <div className="card" >
                  <div className="card-info" >
                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID} onClick={() => {
                      setOpenModal(true);
                    }} /> <br />
                    <div style={styles.container}>
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar key={index}
                              size={24}
                              style={{
                                marginRight: 10,
                                cursor: "pointer"
                              }}
                              color={(ratingMovie[i]) > index ? colors.yellow : colors.grey}
                              onClick={() => 
                                {setCurrMovieValue(i); handleClick(index + 1)}}
                              onMouseOver={() => {setCurrMovieValue(i); handleMouseOver(index + 1)}}
                              onMouseLeave={handleMouseLeave} 
                              />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </>
          )
        })}
      </div>
      {openModal && <Modal closeModal={setOpenModal} onChange={(e)=>{}} />}
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}

export default Movies