import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import styles from './Content.module.scss'
import Custom_Button from './Custom_Button/Custom_Button'
import Riddle from './Riddle/Riddle'

interface ContentProps {
  imgSrc: string
  str1: string
  str2: string
  rest: string[]
  setPageState: (state: number) => void;
}

const Content = ({ imgSrc, str1, str2, rest, setPageState }: ContentProps) => {
  const [show, setShow] = useState(false)
  const [secondShow, setSecondShow] = useState(false)
  const [visible, setVisible] = useState([false, false, false])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    timers.push(setTimeout(() => setShow(true), 2500))
    timers.push(setTimeout(() => setSecondShow(true), 7200))
    timers.push(setTimeout(() => setVisible(() => [true, false, false]), 2500))
    timers.push(setTimeout(() => setVisible(() => [true, true, false]), 3800))
    timers.push(setTimeout(() => setVisible(() => [true, true, true]), 5100))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main className="container">
      <section className={styles.content}>
        <div className={styles.content__text}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(25)
                .typeString(str1)
                .pauseFor(500)
                .typeString(str2)
                .start()
            }}
          />
        </div>
      </section>

      {show && (
        <section className={styles.door}>
          {rest.map((text, i) => (
            <span key={i} className={styles.door__img}>
              <img
                src={imgSrc}
                alt="puerta_infiernoVerde"
                className={styles.img}
              />
              
              <Custom_Button onClick={() => {
                if (i === 0) setPageState(2)
                else setPageState(3)
              }} str={`${i + 1}`} />

              <div className={styles.door__content}>
                {visible[i] && (
                  <div className={styles.door__content_text}>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.changeDelay(70)
                                  .typeString(text)
                                  .start()
                      }}
                    />
                  </div>
                )}
              </div>
            </span>
          ))}
        </section>
      )}

      {secondShow && (
        <section className={styles.riddle}>
          <Riddle str={ 'Solo una puerta dice la verdad. <br/> ¿QUÉ PUERTA CRUZAS?' }/>
        </section>
      )}
    </main>
  )
}

export default Content