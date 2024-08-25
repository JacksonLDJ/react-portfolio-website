import React from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Contact from '../components/contact/Contact'
import Experience from '../components/Experience/Experience'
import About from '../components/about/About'
import Portfolio from '../components/Portfolio/Portfolio'
import HeaderSocial from '../components/Header/HeaderSocial'


export const Home = () => {
  return (
    <>
        <HeaderSocial />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Portfolio />
    </>
  )
}
