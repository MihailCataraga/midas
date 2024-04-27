import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import servicii from '../data/Servicii'

export default function Servicii() {
    useEffect(() => {
        const figura = document.getElementById('figura');

        // Funcția pentru a gestiona mișcarea cursorului
        const handleMouseMove = function (event) {
            // Coordonatele cursorului mouse-ului
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Amânăm actualizarea poziției elementului cu 50 de milisecunde (sau orice alt interval dorit)
            setTimeout(() => {
                figura.style.left = (mouseX - figura.offsetWidth / 2) + 'px';
                figura.style.top = (mouseY - figura.offsetHeight / 2) + 'px';
            }, 150); // Delay-ul de 50 de milisecunde
        };


        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])
    return (
        <div className='serviciiPage'>
            <div id='figura'></div>
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
        </div>
    )
}
