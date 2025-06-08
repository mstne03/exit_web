import styles from './Header.module.scss'

interface HeaderProps {
  imgSrc: string;
}

const Header = ({ imgSrc }: HeaderProps) => (
  <header className={styles.container}>
    <div className={styles.ico}>
      <span>&#129168;</span>
    </div>
    <span className={styles.container__logo}>
      <img
        src={ imgSrc }
        alt="exit_logo"
        className={styles.container__logo_logo}
      />
    </span>
  </header>
);

export default Header;