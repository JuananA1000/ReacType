import logo from '../../assets/images/logo.svg';

export default function Logo() {
  return (
    <div className='logo' style={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
      <img src={logo} alt='logo' width={50} />
      <h1 style={{ margin: '0 0 0 10px' }}>ReacType</h1>
    </div>
  );
}
