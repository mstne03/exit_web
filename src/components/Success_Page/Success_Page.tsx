import styles from './Success_Page.module.scss'

interface Success_PageProps {
  mainMessage: string
}

const Success_Page = ({ mainMessage }: Success_PageProps) => (
  <main className="container">
    <div className={styles.success__content}>
      <p>Éxito!</p>
    </div>
  </main>
);

export default Success_Page;
