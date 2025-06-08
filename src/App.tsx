import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Loading_content from './components/Loading_content/Loading_content'
import Content from './components/Content/Content'
import exitLogo from './assets/img/exit-logo.svg'
import doorImg from './assets/img/puerta.svg'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4500);
    return () => {clearTimeout(timeout)};
  }, []);

  return (
    <>
      <Header imgSrc={ exitLogo }/>

      {loading
        
      ? <Loading_content 
          principal_str=
            "INICIANDO SECUENCIA DE ACCESO" 
          secondary_str="."
        />

      : <>
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
          />
        </>
      }
    </>
  )
}

export default App
