import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { MdFolderShared } from "react-icons/md";

const Nav = () => {

  function scrollTo(elementId) {
    var htmlElement = document.getElementById(elementId);
    if (!htmlElement) return;

    // var topOffset = 50;
    var elementPosition = htmlElement.getBoundingClientRect().top + window.scrollY;
    console.log(elementPosition);
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }

  return (
    <nav>
      <div onClick={() => scrollTo("root")}><AiOutlineHome /></div>
      <div onClick={() => scrollTo("about")}><BiUserCircle /></div>
      <div onClick={() => scrollTo("experience")}><BiBookOpen /></div>
      <div onClick={() => scrollTo("contact")}><BiMessageSquareDetail /></div>
      <div onClick={() => scrollTo("blog-home")}>< MdFolderShared /></div>
      
    </nav>
  )
}

export default Nav