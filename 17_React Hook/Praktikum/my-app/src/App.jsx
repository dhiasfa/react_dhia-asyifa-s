import { Header } from './assets/components/Header'
import { Form } from './assets/components/Form'
import { Content } from './assets/components/Content'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    alert('Welcome to Create Product Page');
  }, []);
  return (
   <>
    <Header />
    <Content />
    <Form />
    {/* <Tabel /> */}
   </>
  )
}

export default App
