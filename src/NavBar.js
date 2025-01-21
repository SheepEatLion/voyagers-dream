import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import homeImage from './assets/home.png';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
      <BrowserRouter>
      <nav className={styles.nav_container}>
        <Link to="/">
          <img src={homeImage} alt={"home"} className={styles.home_link}/>
        </Link>
        <ul className={styles.navbar_ul}>
          <li className={styles.navbar_li}><Link to="/mercury">Mercury</Link></li>
          <li className={styles.navbar_li}><Link to="/venus">Venus</Link></li>
          <li className={styles.navbar_li}><Link to="/earth">Earth</Link></li>
          <li className={styles.navbar_li}><Link to="/mars">Mars</Link></li>
          <li className={styles.navbar_li}><Link to="/jupiter">Jupiter</Link></li>
          <li className={styles.navbar_li}><Link to="/saturn">Saturn</Link></li>
          <li className={styles.navbar_li}><Link to="/uranus">Uranus</Link></li>
          <li className={styles.navbar_li}><Link to="/neptune">Neptune</Link></li>
        </ul>
      </nav>
      </BrowserRouter>
  );
};

export default NavBar;
