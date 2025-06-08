import styles from './Success_Page.module.scss'
import Typewriter from 'typewriter-effect'

interface Success_PageProps {
  mainMessage: string
}

const Success_Page = ({ mainMessage }: Success_PageProps) => (
  <main className="container">
    <div className={styles.success__content}>
      <Typewriter onInit={(typewriter) => {
        typewriter.typeString(mainMessage).start()
      }}/>
    </div>
  </main>
);

export default Success_Page;
