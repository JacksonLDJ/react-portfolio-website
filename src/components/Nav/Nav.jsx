import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { MdFolderShared } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><BiUserCircle /></a>
      <a href="#experience"><BiBookOpen /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
      <a href='#portfolio'>< MdFolderShared /></a>
      
    </nav>
  )
}

export default Nav