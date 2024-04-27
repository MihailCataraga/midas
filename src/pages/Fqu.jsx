import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fqu from '../data/Fqu';

export default function Fqu() {
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
        <div className='fquPage'>
            <div id='figura'></div>
            <div className='fqu'>
                <Navbar />
                <main>
                    {fqu.map((i) => {
                        return (
                            <div className='question' key={i.question}>
                                <h2>{i.question}</h2>
                                <p>{i.answer}</p>
                            </div>
                        )
                    })}
                </main>
                <Footer />
            </div>
        </div>
    )
}
