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
                <Link to='/'>Servicii</Link>
                <Link to='/'>Despre Noi</Link>
                <Link to='/portofoliu'>Portofoliu</Link>
                <Link to='/'>Contacte</Link>
            </div>
        </div>
        <p>@Midas Group 2024: Toate drepturile rezervate</p>
    </div>
  )
}
