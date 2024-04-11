import { useRef, useState } from 'react';
import Logo from '../components/Logo/Logo';
import './App.css';

const getCloud = () =>
  `Lorem ipsum dolor sit amet consectetur adipisicing elit Id ipsum quae odit in magni totam consectetur vitae enim
  harum rerum maxime fugiat inventore nostrum corrupti labore explicabo similique quam et`
    .split(' ')
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

function App() {
  const [userInput, setUserInput] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const cloud = useRef(getCloud());

  console.log('Contenido de getCloud: ', cloud.current);

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

      <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
}

export default App;
