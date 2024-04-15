import { useRef, useState } from 'react';

import Logo from '../components/Logo/Logo';
import Timer from '../components/Timer/Timer';
import Word from '../components/Word/Word';

import './App.css';

// TUTORIAL: https://youtu.be/Hpf2OmYnqhw?si=Mr6Vrtdk8fgt8RFU
// PENDIENTE: parar tiempo al terminar las palabras
// PENDIENTE: las palabras sobrepasan los limites de la pantalla

// const getCloud = () =>
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit Id ipsum quae odit in magni totam consectetur vitae enim
//   harum rerum maxime fugiat inventore nostrum corrupti labore explicabo similique quam et`;

const getCloud = () => `Lorem ipsum dolor sit `;

function App() {
  const [userInput, setUserInput] = useState('');
  const [startCounting, setStartCounting] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  const processInput = (value) => {
    if (activeWordIndex === cloud.current.length) {
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      if (activeWordIndex === cloud.current.length - 1) {
        setStartCounting(false);
        setUserInput('');
      } else {
        setUserInput('');
      }

      setActiveWordIndex((index) => index + 1);

      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex];

        return newResult;
      });
    } else {
      setUserInput(value);
    }
  };

  const cloud = useRef(
    getCloud()
      .split(' ')
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
  );

  return (
    <div>
      <Logo />
      <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} />

      <p>
        {cloud.current.map((word, index) => {
          return <Word text={word} active={index === activeWordIndex} correct={correctWordArray[index]} />;
        })}
      </p>

      {/* PENDIENTE: Este componente a un archivo aparte */}
      <input type='text' value={userInput} onChange={(e) => processInput(e.target.value)} />
    </div>
  );
}

export default App;
