import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Loading_content from './components/Loading_content/Loading_content'
import Content from './components/Content/Content'
import Success_Page from './components/Success_Page/Success_Page'
import exitLogo from './assets/img/exit-logo.svg'
import doorImg from './assets/img/puerta.svg'

function App() {
  const [pageState, setPageState] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setPageState(1), 4500);
    return () => {clearTimeout(timeout)};
  }, []);

  return (
    <>
      <Header imgSrc={ exitLogo }/>

      {pageState === 0 && (
        <Loading_content 
          principal_str=
            "INICIANDO SECUENCIA DE ACCESO" 
          secondary_str="."
        />
      )}

      {pageState === 1 && (
        <Content 
          imgSrc={ doorImg }
          str1=
          { 
            "Una de estas puertas "
          }
          str2=
          {
            "te llevará a la salida:"
          }
          rest={["NO SOY LA CORRECTA","LA PUERTA 1 MIENTE","LA 2 ES LA CORRECTA"]}
          setPageState={setPageState}
        />
      )}

      {pageState === 2 && <Success_Page/>}
      {pageState === 3 && <p>Fracaso...</p>}
    </>
  )
}

export default App
