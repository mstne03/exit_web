import styles from './Custom_Button.module.scss'


interface Custom_ButtonProps {
  str : string
  onClick: () => void;
}

const Custom_Button = ({ onClick, str }: Custom_ButtonProps) => (
  <button onClick={onClick} className={styles.custom__button}>
    { str }
  </button>
);

export default Custom_Button;