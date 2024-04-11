import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo/Logo';
import './App.css';

// TUTORIAL: https://youtu.be/Hpf2OmYnqhw?si=Mr6Vrtdk8fgt8RFU

const getCloud = () =>
  `Lorem ipsum dolor sit amet consectetur adipisicing elit Id ipsum quae odit in magni totam consectetur vitae enim
  harum rerum maxime fugiat inventore nostrum corrupti labore explicabo similique quam et`;

// PENDIENTE: Este componente a un archivo aparte
const Word = (props) => {
  const { text, active, correct } = props;

  const reRender = useRef(0);

  useEffect(() => {
    reRender.current += 1;
  });

  if (active) {
    return <span className='active'>{text}</span>;
  }

  if (correct === true) {
    return <span className='correct'>{text}</span>;
  }

  if (correct === false) {
    return <span className='incorrect'>{text}</span>;
  }

  return <span>{text}</span>;
};

function App() {
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  const processInput = (value) => {
    if (value.endsWith(' ')) {
      setActiveWordIndex((index) => index + 1);
      setUserInput('');

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
