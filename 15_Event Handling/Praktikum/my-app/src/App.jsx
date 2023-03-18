import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Header } from './assets/components/Header'
import { Form } from './assets/components/Form'
import { Content } from './assets/components/Content'
import { Tabel } from './assets/components/Tabel'
import { useEffect } from 'react'

function App() {
  return (
   <>
    <Header />
    <Content />
    <Form />
    <Tabel />
   </>
  )
}

export default App
