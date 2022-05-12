import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <p className={styles.icon}><span className="fa fa-tasks"></span></p>
      <ul className={styles.navigation}>
        <li><a href='/'>Home</a></li>
        <li><a href='/favorite'>Favorite</a></li>
        <li><a href='/about'>About</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;