import { useState } from 'react';

export default function useVisualMode (initial) {

  const [mode, setMode ] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // changes mode and updates mode history
  const transition = (newMode, replace = false) => {
    setHistory(replace? prev => prev : prev => [...prev, newMode]);
    setMode(newMode);
  };
  // sets mode to previous (or initial if appropriate)
  const back = () => {
    if (history.length > 1) {
      setMode(history[history.length -2]);
      setHistory(prev => [...prev].slice(0, -1));
    } else {
      setMode(initial);
      setHistory(initial);
    }
  };

  return { mode, transition, back };

};