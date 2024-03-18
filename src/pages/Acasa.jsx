import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import Img1 from '../assets/imgs/Poza 1.png';
import Img2 from '../assets/imgs/Poza 2.png';
import Img3 from '../assets/imgs/Poza 3.png';

export default function Acasa() {
    document.addEventListener('mousemove', function(event) {
        setTimeout(() => {
            var figura = document.getElementById('figura');
            var mouseX = event.clientX;
            var mouseY = event.clientY;
        
            // Actualizăm poziția figurii pentru a urmări cursorul
            figura.style.left = (mouseX - figura.offsetWidth / 2) + 'px'; // Centrăm figura pe cursor
            figura.style.top = (mouseY - figura.offsetHeight / 2) + 'px';
        }, 100)
        
    });
  return (
    <div className='acasa'>
        <main>
            <div id='figura'></div>
            <div className='sec-1'>
                <div className='leftCol'>
                    <h1>Transformăm visele în web site-uri funcționale</h1>
                </div>
                <div className='rightCol'>
                    <div className='contentBoxEx'>
                        <div className='navbarEx'>
                            <div className='logoEx'>YOUR LOGO</div>
                            <div className='navbarEx'>
                                <p>SERVICE</p>
                                <p>ABOUT</p>
                                <p>PRICE</p>
                                <p>NEWS</p>
                                <FaSearch className='icon' />
                            </div>
                        </div>
                        <div className='mainEx'>
                            <div className='leftEx'>
                                <h2>PAGE DESIGN</h2>
                                <button>LEARN MORE</button>
                                <div className='optionsEx'>
                                    <p>FOLLOW</p>
                                    <FaInstagram className='icon' />
                                    <FaXTwitter className='icon' />
                                    <FaFacebook className='icon' />
                                </div>
                            </div>
                            <div className='rightEx'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-2'>
                <div className='imgsLeft'>
                    <img id='img3' src={Img1} alt='Simbol img 1' />
                    <img id='img2' src={Img2} alt='Simbol img 2' />
                    <img id='img1' src={Img3} alt='Simbol img 3' />
                    {/* <div id='img1'></div>
                    <div id='img2'></div>
                    <div id='img3'></div> */}
                </div>
                <div className='textRight'>
                    <p>La Midas Group, credem că fiecare afacere merită să aibă un site web care să se ridice la standardele cele mai înalte de calitate și profesionalism. Suntem dedicați să creăm site-uri web personalizate și inovatoare pentru clienții noștri. Indiferent dacă sunteți o afacere mică sau o corporație mare, suntem aici pentru a vă ajuta să vă transformați viziunea în realitate digitală.</p>
                </div>
            </div>
        </main>
    </div>
  )
}
