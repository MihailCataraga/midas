import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const toUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='footer'>
        <div className='top'>
            <h3>Midas Group</h3>
            <div className='center'>
                <Link to='/' onClick={toUp}>Politică de confidențialitate</Link>
                <Link to='/' onClick={toUp}>Termeni și condiții</Link>
                <Link to='/fqu' onClick={toUp}>Întrebări fregvente</Link>
            </div>
            <div className='right'>
                <Link to='/servicii' onClick={toUp}>Servicii</Link>
                <Link to='/' onClick={toUp}>Despre Noi</Link>
                <Link to='/portofoliu' onClick={toUp}>Portofoliu</Link>
            </div>
        </div>
        <p>@Midas Group 2024: Toate drepturile rezervate</p>
    </div>
  )
}
