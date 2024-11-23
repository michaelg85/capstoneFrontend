import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {' | '}
      <Link to={'/addMovie'}>Search</Link>
      {' | '}
      <Link to={'/addMovie'}>Help</Link>
      {' | '}
      <Link to={'/addMovie'}>About Us</Link>
    </nav>
  );
}