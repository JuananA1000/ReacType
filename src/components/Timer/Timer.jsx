import { useEffect, useState } from 'react';

import './Timer.css'

export default function Timer(props) {
  // Tiempo transcurrido
  const [timeElapsed, setTimeElapsed] = useState(0);
  const minutes = timeElapsed / 60;
  const { correctWords } = props;

  useEffect(() => {
    let id;

    if (props.startCounting) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [props.startCounting]);

  return (
    <div className='timer-content'>
      <p>Tiempo Transcurrido: {timeElapsed}</p>
      <p>Velocidad: {(correctWords / minutes || 0).toFixed(2)} ppm</p>
    </div>
  );
}
