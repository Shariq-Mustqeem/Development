import { React, useState } from "react";
import "./App.css";
import DisplayCount from "./Components/DisplayCount/DisplayCount";

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const Increment = () => {
    setCount(count + 1);
  };
  const deIncrement = () => {
    // if (!count > 0) {
    //   return;
    // }
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const showHide = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="App">
      {isShow && <DisplayCount count={count} />}

      <button onClick={Increment}>Increment</button>
      <button onClick={deIncrement}>Decrement</button>
      <button onClick={showHide}>Show/Hide</button>
    </div>
  );
}

export default App;
