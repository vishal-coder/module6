import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Guvi";

  // array of objects
  const users = [
    { name: "jack", imgSrc: "./1.jpg" },
    { name: "jack", imgSrc: "./2.jpg" },
    { name: "jack", imgSrc: "./3.jpg" },
  ];
  return (
    <div className="App">
      {users.map((user) => (
        <Message name={user.name} imgSrc={user.imgSrc} />
      ))}
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <img
        className="profile-pic"
        src={props.imgSrc}
        alt=""
        width="200"
        height="200"
      />
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

export default App;
