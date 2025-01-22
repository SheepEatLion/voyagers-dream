import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import homeImage from './assets/Mars_surface.png';
import styles from './NavBar.module.css';
import Button from "./Button";

const NavBar = () => {
  return (
      <BrowserRouter>
      <nav className={styles.nav_container}>
        <Link to="/">
          <img src={homeImage} alt={"home"} className={styles.home_link}/>
        </Link>
        <ul className={styles.navbar_ul}>
          <li className={styles.navbar_li}><Link to="/mercury" className={styles.nav_link}>Mercury</Link></li>
          <li className={styles.navbar_li}><Link to="/venus" className={styles.nav_link}>Venus</Link></li>
          <li className={styles.navbar_li}><Link to="/earth" className={styles.nav_link}>Earth</Link></li>
          <li className={styles.navbar_li}><Link to="/mars" className={styles.nav_link}>Mars</Link></li>
          <li className={styles.navbar_li}><Link to="/jupiter" className={styles.nav_link}>Jupiter</Link></li>
          <li className={styles.navbar_li}><Link to="/saturn" className={styles.nav_link}>Saturn</Link></li>
          <li className={styles.navbar_li}><Link to="/uranus" className={styles.nav_link}>Uranus</Link></li>
          <li className={styles.navbar_li}><Link to="/neptune" className={styles.nav_link}>Neptune</Link></li>
          <Button text={"Sign in"} type={"light"}></Button>
          <Button text={"Register"} type={"dark"}></Button>
        </ul>
      </nav>
      </BrowserRouter>
  );
};

export default NavBar;
