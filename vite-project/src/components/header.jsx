import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const currentPage = useLocation().pathname;  
  return (
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Ida Whitcomb</a>
          </div>
        </nav>
<nav>
  <div className='navbar-text'>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
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
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
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