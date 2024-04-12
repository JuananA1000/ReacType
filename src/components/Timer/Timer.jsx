import { useEffect, useState } from 'react';

export default function Timer(props) {
  // Tiempo transcurrido
  const [timeElapsed, setTimeElapsed] = useState(0);
  const minutes = timeElapsed / 60;
  const { correctWords } = props;

  useEffect(() => {
    if (props.startCounting) {
      setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
  }, [props.startCounting]);

  return (
    <div>
      <p>Tiempo Transcurrido: {timeElapsed}</p>
      <p>Velocidad: {(correctWords / minutes || 0).toFixed(2)} ppm</p>
    </div>
  );
}
