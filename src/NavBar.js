import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
      <BrowserRouter>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/mercury">Mercury</Link></li>
          <li className={styles.navItem}><Link to="/venus">Venus</Link></li>
          <li className={styles.navItem}><Link to="/earth">Earth</Link></li>
          <li className={styles.navItem}><Link to="/mars">Mars</Link></li>
          <li className={styles.navItem}><Link to="/jupiter">Jupiter</Link></li>
          <li className={styles.navItem}><Link to="/saturn">Saturn</Link></li>
          <li className={styles.navItem}><Link to="/uranus">Uranus</Link></li>
          <li className={styles.navItem}><Link to="/neptune">Neptune</Link></li>
        </ul>
      </nav>
      </BrowserRouter>
  );
};

export default NavBar;
