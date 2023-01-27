import { Fragment, useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return { width, height};
}

const Navbar = () => {

    const [showNav, setshowNav] = useState<boolean>(false);
    const {width, height} = useScreenSize();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Marcadores
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => { width < 991 ? setshowNav(!showNav) : setshowNav(showNav) }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={showNav ? 'collapse navbar-collapse active' : 'collapse navbar-collapse' } id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                <button onClick={() => { width < 991 ? setshowNav(!showNav) : setshowNav(showNav) }}>Agregar</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
