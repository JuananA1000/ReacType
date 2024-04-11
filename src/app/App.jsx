import { useState } from 'react';
import Logo from '../components/Logo/Logo';
import './App.css';

function App() {
  const cloud = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quae odit in magni totam consectetur
  vitae, enim harum rerum maxime fugiat inventore nostrum corrupti labore explicabo similique quam et.`;

  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <Logo />

      <p>{userInput}</p>
      <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
}

export default App;
