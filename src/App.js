import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { navigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { MovieCard } from "./MovieCard";

import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MovieDetails } from "./MovieDetails";
import { BasicForm } from "./BasicForm";

function App() {
  const name = "Guvi";
  const initialMovieList = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];

  const [movieList, setMovieList] = useState(initialMovieList);
  // array of objects
  const users = [
    { name: "jack", imgSrc: "./1.jpg" },
    { name: "jack", imgSrc: "./2.jpg" },
    { name: "jack", imgSrc: "./3.jpg" },
  ];

  const navigate = useNavigate();
  return (
    // <div className="App">
    //   {users.map((user) => (
    //     <Message name={user.name} imgSrc={user.imgSrc} />
    //   ))}
    // </div>

    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/color-game");
            }}
          >
            Color Game
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/movie-List");
            }}
          >
            Movie
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/form");
            }}
          >
            Form Validation
          </Button>
        </Toolbar>
      </AppBar>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          <li>
            <Link to="/movie-List">Movie List</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movie-List"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />

        <Route path="/films" element={<Navigate replace to="/movie-list" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/form" element={<BasicForm />} />

        {/* // Movie/addMovie */}
      </Routes>
    </div>
    // <div className="App">{/* <AddColor /> */

    // }</div>
  );
}

function NotFound() {
  return (
    <div>
      <p>Page not found 404</p>
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1654498537~exp=1654499137~hmac=b04c230f8c0ccb08c9737dcae8018d802b4748140d59734b3e52324915a82973"
        alt="Page not found"
        className="not-found"
      />
    </div>
  );
}
function Home() {
  return <h1>Welcome to Master Home Page</h1>;
}

function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [rating, setRatinge] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="add-movie-form">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Poster"
          variant="standard"
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Rating"
          variant="standard"
          onChange={(e) => {
            setRatinge(e.target.value);
          }}
        />

        <TextField
          id="standard-basic"
          label="Summary"
          variant="standard"
          className="TextField"
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />

        {/* copy the movie list and add new movie to it */}

        <Button
          onClick={() => {
            const Movie = {
              image: poster,
              title: name,
              rating: rating,
              info: summary,
            };
            console.log(Movie);
            setMovieList([...movieList, Movie]);
          }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
      <div className="movieList">
        {movieList.map((mv, index) => (
          <MovieCard movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

function AddMovie() {}
