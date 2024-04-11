import { useRef, useState } from 'react';
import Logo from '../components/Logo/Logo';
import './App.css';

const getCloud = () =>
  `Lorem ipsum dolor sit amet consectetur adipisicing elit Id ipsum quae odit in magni totam consectetur vitae enim
  harum rerum maxime fugiat inventore nostrum corrupti labore explicabo similique quam et`;

function App() {
  const [userInput, setUserInput] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const processInput = (value) => {
    if (value.endsWith(' ')) {
      setActiveIndex((index) => index + 1);
      setUserInput('');
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
          if (index === activeIndex) {
            return <b>{word}</b>;
          }

          return <span>{word}</span>;
        })}
      </p>

      <input type='text' value={userInput} onChange={(e) => processInput(e.target.value)} />
    </div>
  );
}

export default App;
