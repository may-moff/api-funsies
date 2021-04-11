import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <ul className='navlist'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/search'
                className='nav-links'
               
              >
                search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
              >
                cart
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/checkout'
                className='nav-links'
              >
                checkout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
