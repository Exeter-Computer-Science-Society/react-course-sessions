import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <>
            <NavLink exact to="/"><button>Back</button></NavLink>
            <h1>About</h1>
            <p>This is a movie app developed for the EXCS React Bootcamp.</p>
        </>
    )
}