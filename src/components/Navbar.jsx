import React, { useEffect } from 'react';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import Ro from '../assets/imgs/flag_ro-4x3.png';
import Ru from '../assets/imgs/flag_ru-4x3.png';
import En from '../assets/imgs/flag_gb-4x3.png';

export default function Navbar() {
  const menuShow = () => {
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
    menu.style.animation = 'menuShow 0.5s ease-in-out';
  }
  const menuClose = () => {
    const menu = document.getElementById('menu');
    menu.style.animation = 'menuClose 0.5s ease-in-out';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 500)
  }
  const handleClickOutside = (event) => {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex' && !event.target.closest('.menu')) {
      menuClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
          <NavLink to={'/'} >Acasa</NavLink>
          <NavLink to={'/despreNoi'}>Despre Noi</NavLink>
          <NavLink to={'/servicii'}>Servicii</NavLink>
          <NavLink to={'/portofoliu'}>Portofoliu</NavLink>
          <div className='lang'>
            <img src={Ro} alt='Ro' />
            <img src={Ru} alt='Ru' />
            <img src={En} alt='En' />
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
