import { Counter } from "./Counter";

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
      <Counter />
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
