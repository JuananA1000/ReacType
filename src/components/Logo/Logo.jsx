import logo from '../../assets/images/logo.svg';

import './Logo.css';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt='logo' width={50} />
      <h1>ReacType</h1>
    </div>
  );
}
