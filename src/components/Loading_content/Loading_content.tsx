import Typewriter from 'typewriter-effect'
import styles from './Loading_content.module.scss'

interface Loading_contentProps {
  principal_str : string
  secondary_str : string
}

const Loading_content = ({principal_str, secondary_str} : Loading_contentProps) => (
  <div className={styles.loading__container}>
    <strong className={styles.loading__container_content}>
      <Typewriter onInit={(typewriter) => {
        typewriter.changeDelay(15)
                  .changeDeleteSpeed(.1)
                  .typeString(principal_str)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .pauseFor(300)
                  .deleteChars(1)
                  .pauseFor(300)
                  .deleteChars(1)
                  .pauseFor(300)
                  .deleteChars(1)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .pauseFor(300)
                  .typeString(secondary_str)
                  .start()
      }}/>
    </strong>
  </div>
);

export default Loading_content;