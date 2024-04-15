import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import GoToUp from '../components/GoToUp'
import Footer from '../components/Footer'
import data from '../data/Portofoliu'
import { Link } from 'react-router-dom'

export default function Portofoliu() {
    const [projects, setProjects] = useState(data)
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
                <h1>Portofoliu</h1>
                <p>Unele dintre proiectele noastre</p>
                <div className='projects'>
                    {
                        projects.map((project) => {
                            return (
                                <Link to={project.link} className='projectBox' key={project.id}>
                                    <img src={project.img} alt={`Img ${project.title}`} />
                                    <h4>{project.title}</h4>
                                </Link>
                            )
                        })
                    }
                </div>
            </main>
            <GoToUp />
            <Footer />
        </div>
    </div>
  )
}
