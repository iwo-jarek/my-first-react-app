import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <p className={styles.icon}><span className="fa fa-tasks"></span></p>
      <ul>
        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;