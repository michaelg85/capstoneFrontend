import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {' | '}
      <Link to={'/oneVOne'}>1 v 1</Link>
      {' | '}
      <Link to={'/search'}>Search</Link>
      {' | '}
      <Link to={'/help'}>Help</Link>
      {' | '}
      <Link to={'/aboutUs'}>About Us</Link>
      {' | '}
      <Link to={'/contact'}>Contact</Link>
      <h1 style={{ fontSize: "60px", color: "yellow" }}>Whose Movie?!</h1>
    </nav>
  );
}
