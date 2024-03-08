import { Link, useLocation } from 'react-router-dom';
import './header_footer.css'

export default function Header() {
  const currentPage = useLocation().pathname;  
  return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="name">Ida Whitcomb</a>
          </div>
        </nav>
<nav>
  <div className='navbar-text'>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
          </div>
        </nav>     
      </div>
    )
  }