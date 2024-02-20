import heart from "./assets/heart.png"
import heartempty from "./assets/heart-empty.png"

export default function Card({ id, title, year, director, favourite, image, onClick }) {
    return (
        <div className="card" style={{ 
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%), url(${image})`,
            backgroundSize: 'cover',
        }}  onClick={onClick}>
            <img src={favourite ? heart : heartempty}></img>
            <h2>{title}</h2>
            <p>{director}</p>
            <p><span>{year}</span></p>
        </div>
    )
}

