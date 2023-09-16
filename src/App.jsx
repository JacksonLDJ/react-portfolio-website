import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import About from './components/about/About'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
    </>
  )
}
