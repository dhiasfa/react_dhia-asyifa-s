import React from 'react'
import {Header} from '../components/Header'
import { Content } from '../components/createProducts/Content'
import { Form } from '../components/createProducts/Form'
// import { useEffect } from 'react'
export const CreateProduct = () => {
    // useEffect(() => {
    // alert('Welcome to Create Product Page');
    //  }, []);
  return (
  <>
    <Header />
    < Content/>
    <Form />
  </>
  )
}
