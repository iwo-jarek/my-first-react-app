import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className="fa fa-tasks"></span>
          <ul className={styles.navigation}>
            <li><a href='/'>Home</a></li>
            <li><a href='/favorite'>Favorite</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar;