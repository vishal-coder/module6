import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="MovieDetails">
      <iframe
        width="1217"
        height="560"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        <div className="movie-specs">
          <h2>{movie.name}</h2>
          <p style={styles}>⭐{movie.rating}</p>
        </div>
        <p style={paraStyles} className="summary">
          {movie.summary}
        </p>
      </div>

      <Button
        onClick={() => {
          navigate(-1);
        }}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </div>
  );
}
