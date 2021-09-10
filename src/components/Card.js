import image from "../assets/images/no-image.jpg";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : image}
        alt="poster"
      />
      <ul>
        <li>Name: {movie.Title}</li>
        <li>Year: {movie.Year}</li>
        <li>ImdbID: {movie.imdbID}</li>
        <li>Type: {movie.Type}</li>
      </ul>
    </div>
  );
};

export default Card;
