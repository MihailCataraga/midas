import React from 'react';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import Ro from '../assets/imgs/flag_ro-4x3.png';

export default function Navbar() {
  const menuShow = () => {
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
    menu.style.animation = 'menuShow 1s ease-in-out';
  }
  const menuClose = () => {
    const menu = document.getElementById('menu');
    menu.style.animation = 'menuClose 1s ease-in-out';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 1000)
  }
  return (
    <div className='navbar'>
      <Link>CONTACTE</Link>
      <div className='logo'>
        <p>Midas Group</p>
      </div>
      <div className='menuIcon'>
        <MdOutlineMenu className='icon' onClick={menuShow} />
      </div>
      <div className='menu' id='menu'>
        <MdClose className='icon' onClick={menuClose} />
        <nav>
          <NavLink>Acasa</NavLink>
          <NavLink>Despre Noi</NavLink>
          <NavLink>Servicii</NavLink>
          <NavLink>Portofoliu</NavLink>
          <div className='lang'>
            <img src={Ro} alt='Ro' />
            <img src='' alt='Ru' />
            <img src='' alt='En' />
          </div>
        </nav>
        <div className='social'>
          <a href='/'><FaInstagram className='icon' /></a>
          <a href='/'><FaFacebookF className='icon' /></a>
          <a href='/'><FaXTwitter className='icon' /></a>
          <a href='/'><FaLinkedin className='icon' /></a>
          </div>
      </div>
    </div>
  )
}
