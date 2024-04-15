import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import GoToUp from '../components/GoToUp'
import Footer from '../components/Footer'

export default function Portofoliu() {
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

        // Atașăm evenimentul de mișcare a cursorului la document
        document.addEventListener('mousemove', handleMouseMove);

        // Curățăm evenimentele atașate când componenta este dezmontată
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  return (
    <div className='portofoliuPage'>
        <div id='figura'></div>
        <div className='portofoliu'>
            <Navbar />
            <main>
                <img src='/img/Poza1.png' />
            </main>
            <GoToUp />
            <Footer />
        </div>
    </div>
  )
}
