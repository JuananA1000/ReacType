import { useState } from 'react';
import Logo from '../components/Logo/Logo';
import './App.css';

function App() {
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
