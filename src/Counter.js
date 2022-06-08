import { useState } from "react";

//hook - make react listen change
// hook - function - use- useState
// const [state, setState] = useState(InitialValue)
//state - current value
// setState = function - update state - informing react that state is changed
//and listen to this change
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like{like}
      </button>
      <button onClick={() => setDislike(dislike + 1)}>dislike{dislike}</button>
    </div>
  );
}
