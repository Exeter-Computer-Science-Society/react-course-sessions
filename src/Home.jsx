import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Card from "./Card";
import ApiClient from "./api/index.js";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await ApiClient.movies.getMovies();
      setMovies(fetchedMovies.items);
    };

    fetchMovies();
  }, []);

  const handleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((existingID) => existingID != id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  return (
    <>
      <h1 className={styles.header}>Movie app</h1>
      <p>Welcome to my app!</p>
      <p>You have {favourites.length} favourite movies</p>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <hr />
      <div className="movielist">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            year={new Date(movie.release_date).toDateString()}
            director={movie.director}
            favourite={favourites.includes(movie.id)}
            image={`http://38.242.137.81:8090/api/files/${movie.collectionId}/${movie.id}/${movie.cover}`}
            onClick={() => handleFavourite(movie.id)}
          />
        ))}
      </div>
    </>
  );
}
