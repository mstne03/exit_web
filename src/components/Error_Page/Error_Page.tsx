import styles from './Error_Page.module.scss'
import Typewriter from 'typewriter-effect'

interface Error_PageProps {
  mainMessage: string
}

const Error_Page = ({ mainMessage }: Error_PageProps) => (
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

export default Error_Page;
