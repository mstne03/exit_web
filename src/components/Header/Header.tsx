import styles from './Header.module.scss'

interface HeaderProps {
  imgSrc: string;
  pageState : number;
  setPageState : (state: number) => void;
}

const Header = ({ imgSrc, pageState, setPageState }: HeaderProps) => {
  
  return (
    <header className={styles.container}>
      {(
        pageState === 2 || pageState === 3) && 
      (
        <div className={styles.ico} onClick={() => {
          setPageState(1)
        }}>
          <span className={pageState === 3 ? styles.error_text : ''}>&#129168; atrás</span>
        </div>
      )}
      <span className={pageState === 3 ? styles.container__logo_error : styles.container__logo}>
        <img
          src={ imgSrc }
          alt="exit_logo"
          className={styles.container__logo_logo}
        />
      </span>
    </header>
  )
};

export default Header;