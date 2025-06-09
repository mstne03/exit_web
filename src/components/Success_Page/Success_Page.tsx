import styles from './Success_Page.module.scss'
import Typewriter from 'typewriter-effect'

interface Success_PageProps {
  mainMessage: string
}

const Success_Page = ({ mainMessage }: Success_PageProps) => (
  <main className={`container ${styles.success__container}`}>
    <section className={styles.success__content}>
      <div className={styles.success__content_text}>
        <Typewriter onInit={(typewriter) => {
          typewriter.changeDelay(30)
                    .typeString(mainMessage)
                    .start()
        }}/>
      </div>
    </section>
  </main>
);

export default Success_Page;
