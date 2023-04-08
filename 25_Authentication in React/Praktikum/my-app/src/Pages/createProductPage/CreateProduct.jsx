import React from 'react'
import { Header } from '../../components/Header'
import {Content} from '../../components/CreateProduct/Content'
import { Form } from '../../components/CreateProduct/Form'
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
