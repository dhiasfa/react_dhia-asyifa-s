import React from 'react'
import logo from "../../assets/img/bootstrap-logo.png"
import article from './data/data';
import { useState } from 'react';

export const Content = () => {
  const [language, setLanguage] = useState('en')
  const handleRandomNumber= () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  }

  const handleLanguage = () =>{
    const newLanguage = language === 'en' ? 'id' : 'en';
    setLanguage(newLanguage);
  }
  return (
    <>
      <div className='body'>
            <div className=" pt-4 pb-5">
            <div className=" d-flex justify-content-center mt-5 pb-2">
                <div className="content">
                <div className="text-center">
                    <img src={logo} alt="bootstrap-logo" />
                    <h2> {article.title[language]} </h2>
                    <p> {article.description[language]} </p>
                    <div className="mt-5">
                    <button type="button" className="btn btn-outline-info me-3" onClick={handleRandomNumber}>Random Number</button>
                    <button type="button" className="btn btn-outline-primary" onClick={handleLanguage}>{language === 'en' ? 'Indonesian' : 'English'}</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
      </div>
    </>
  )
}
