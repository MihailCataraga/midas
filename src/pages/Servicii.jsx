import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import servicii from '../data/Servicii'

export default function Servicii() {
  return (
    <div className='servicii'>
        <Navbar />
        <main>
            <h1>Servicii</h1>
            <p>Echipa noastră oferă soluții digitale personalizate, adaptate nevoilor unice ale fiecărui client.</p>
            <div className='services'>
                {servicii.map((service) => {
                    return (
                        <div className='service' key={service.title}>
                            <h2>{service.title}</h2>
                            <p>{service.text}</p>
                        </div>
                    )
                })}
            </div>
        </main>
        <Footer />
    </div>
  )
}
