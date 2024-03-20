import React from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link>CONTACTE</Link>
        <div className='logo'>
            <p>Midas Group</p>
        </div>
        <div className='menuIcon'>
            <MdOutlineMenu className='icon' />
        </div>
    </div>
  )
}
