import React from 'react'
import { Header } from '../assets/components/Header'
import {Content} from '../assets/components/Content'
import {Form} from '../assets/components/Form'
import { useEffect } from 'react'
export const CreateProduct = () => {
    useEffect(() => {
    alert('Welcome to Create Product Page');
     }, []);
  return (
  <>
    <Header />
    <Content />
    <Form />
  </>
  )
}
