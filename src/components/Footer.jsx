import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <h3>Midas Group</h3>
            <div className='center'>
                <Link to='/'>Politică de confidențialitate</Link>
                <Link to='/'>Cookies</Link>
                <Link to='/'>Termeni și condiții</Link>
                <Link to='/'>Întrebări fregvente</Link>
            </div>
            <div className='right'>
                <Link to='/'>Acasa</Link>
                <Link to='/'>Servicii</Link>
                <Link to='/'>Contacte</Link>
                <Link to='/'>Despre Noi</Link>
            </div>
        </div>
        <p>@Midas Group 2024: Toate drepturile rezervate</p>
    </div>
  )
}
