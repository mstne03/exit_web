import Typewriter from 'typewriter-effect'
import styles from './Riddle.module.scss'

interface RiddleProps {
  str : string
}

const Riddle = ({ str } : RiddleProps) => (
  <div className={styles.riddle__container}>
    <div className={styles.riddle__container_content}>
      <Typewriter onInit={(typewriter) => { 
        typewriter.changeDelay(25).typeString(str).start()
      }} />
    </div>
  </div>
);

export default Riddle;
