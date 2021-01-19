import React, { useState } from 'react';

import ReviewForm from "./ReviewForm"
import ReviewShow from "./ReviewShow"
import Processing from "./Processing"
import Signup from "./Signup"
import Login from "./Login"
import "./styles.css";

// taken from Scheduler project, needs to be modified to fit this project, and tucked into helper file

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Creates an array with the states' history
  const transition = (changeMode, replace = false) => {
    if (!replace) {
      setHistory(prev => [...prev, changeMode]);
    } else {
      setHistory(prev => {
        prev.pop();
        return [...prev, changeMode];
      });
    }
    setMode(changeMode);
  };

  const back = () => {
    setHistory(prev => {
      if (history.length > 1) {
        prev.pop();
        setMode(prev[prev.length - 1]);
      } else {
        setMode(initial);
      }
      return prev;
    });
  };

  return { mode, transition, back };
}

// ends here

export default function Review(props) {
  const REVIEW1 = 'REVIEW1';

  // scheduler code
  const { mode } = useVisualMode();

  return <article classname="review" data-testid="review">
    {mode === REVIEW1 && <Login />}
    <Login />
  </article>
};
