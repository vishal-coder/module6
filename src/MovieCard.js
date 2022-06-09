import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Badge from "@mui/material/Badge";

import InfoIcon from "@mui/icons-material/Info";
//import IconButton from "@mui/icons-material/IconButton";

import IconButton from "@mui/material/IconButton";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export function MovieCard({ movie, id }) {
  //conditional styling
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState(0);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="MovieCard">
      <img className="movie-Photo" src={movie.poster} alt="" />
      <div className="movie-specs">
        <h2 class="movie-name">
          {movie.name}
          <IconButton
            onClick={() => navigate(`/movies/${id}`)}
            color="primary"
            aria-label="Movie details"
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setShow(!show);
            }}
            color="primary"
            aria-label={show ? "Hide" : "Show"}
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h2>

        <p style={styles}>⭐{movie.rating}</p>
      </div>

      {/* //conditional styling
            contents remain on DOM you only changes style
            */}
      <p style={paraStyles} className="summary">
        {movie.summary}
      </p>
      <div class="base-Icons">
        <div>
          <Badge badgeContent={like} color="primary">
            <IconButton color="primary" size="large">
              <ThumbUpIcon
                style={{ color: "#ffc400" }}
                onClick={() => {
                  setLike(like + 1);
                }}
              />
            </IconButton>
          </Badge>
          <Badge badgeContent={unlike} color="error">
            <IconButton color="primary" size="large">
              <ThumbDownIcon
                style={{ color: "#ffc400" }}
                onClick={() => {
                  setUnlike(unlike + 1);
                }}
              />
            </IconButton>
          </Badge>
        </div>

        <div>
          <IconButton color="primary" size="large">
            <EditIcon style={{ color: "#d500f9" }} />
          </IconButton>
          <IconButton color="primary" size="large">
            <DeleteOutlineIcon style={{ color: "red" }} />
          </IconButton>
        </div>
      </div>

      {/* conditional rendering
            content wont be there on dom
            it will be removed from DOM
            */}
    </div>
  );
}
