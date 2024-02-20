import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Card from "./Card";

//Import movie posters
import batman from "./assets/posters/batman.jpg"
import blackpanther from "./assets/posters/blackpanther.webp"
import interstellar from "./assets/posters/interstellar.jpg"
import joker from "./assets/posters/joker.jpg"
import jurassicpark from "./assets/posters/jurassicpark.jpg"
import missionimpossible from "./assets/posters/missionimpossible7.jpg"
import ratatouille from "./assets/posters/ratatouille.jpg"
import starwars from "./assets/posters/starwars-III.webp"
import walle from "./assets/posters/walle.webp"

export default function Home() {
    const [movies, setMovies] = useState([
        {   
            id: 1, 
            title: "Batman", 
            year: "2022", 
            director: "Matt Reeves",
            favourite: false, 
            image: batman 
        },
        { id: 2, title: "Black Panther", year: "2018", director: "Ryan Coogler", favourite: false, image: blackpanther  },
        { id: 3, title: "Interstellar", year: "2014", director: "Christopher Nolan", favourite: false, image: interstellar  },
        { id: 4, title: "Joker", year: "2019", director: "Todd Phillips", favourite: false, image: joker  },
        { id: 5, title: "Jurassic Park", year: "1993", director: "Steven Spielberg", favourite: false, image: jurassicpark  },
        { id: 6, title: "Mission Impossible 7", year: "2023", director: "Christopher McQuarrie", favourite: false, image: missionimpossible  },
        { id: 7, title: "Ratatouille", year: "2007", director: "Brad Bird", favourite: false, image: ratatouille  },
        { id: 8, title: "Star Wars III: Revenge of the Sith", year: "2005", director: "George Lucas", favourite: false, image: starwars  },
        { id: 9, title: "WALL-E", year: "2008", director: "Andrew Stanton", favourite: false, image: walle  }
    ]);

    const [favourites, setFavourites] = useState(0)

    useEffect(() =>{
        var count = movies.filter(movie => movie.favourite).length;
        setFavourites(count);
    }, [movies]);

    const handleFavourite = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, favourite: !movie.favourite } : movie
            )
        );
    };

    return (
        <>
            <h1 className={styles.header} >Movie app</h1>
            <p>Welcome to my app!</p>
            <p>You have {favourites} favourite movies</p>
            <NavLink to="/about"><button>About</button></NavLink>
            <hr />
            <div className="movielist">
            {movies.map((movie) => (
                <Card   key={movie.id} 
                        title={movie.title} 
                        year={movie.year} 
                        director={movie.director}
                        favourite={movie.favourite}
                        image={movie.image} 
                        onClick={() => handleFavourite(movie.id)}/>
            ))}
            </div>
        </>
    )
}