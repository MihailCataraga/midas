import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import data from '../data/ChartData';
import Img1 from '../assets/imgs/Poza 1.png';
import Img2 from '../assets/imgs/Poza 2.png';
import Img3 from '../assets/imgs/Poza 3.png';
import Navbar from '../components/Navbar';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Acasa() {
    // const animationCard = (event) => {
    //     const card = document.getElementById('rightCol')
    //     const rect = card.getBoundingClientRect();

    //     // Calculăm centrul div-ului
    //     const centerX = rect.left + rect.width / 2;
    //     const centerY = rect.top + rect.height / 2;
    //     const mouseX = event.clientX;
    //     const mouseY = event.clientY;

    //     console.log("Centrul div-ului:", centerX, centerY);
    //     console.log("Mouse:", mouseX, mouseY);
        

    // }
    useEffect(() => {
        const figura = document.getElementById('figura');

        // Funcția pentru a gestiona mișcarea cursorului
        const handleMouseMove = function(event) {
            // Coordonatele cursorului mouse-ului
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Amânăm actualizarea poziției elementului cu 50 de milisecunde (sau orice alt interval dorit)
            setTimeout(() => {
                figura.style.left = (mouseX - figura.offsetWidth / 2) + 'px';
                figura.style.top = (mouseY - figura.offsetHeight / 2) + 'px';
            }, 150); // Delay-ul de 50 de milisecunde
        };

        // const animationCard = (event) => {
        //     const card = document.getElementById('rightCol')
        //     const rect = card.getBoundingClientRect();
    
        //     // Calculăm centrul div-ului
        //     const centerX = rect.left + rect.width / 2;
        //     const centerY = rect.top + rect.height / 2;
        //     const mouseX = event.clientX;
        //     const mouseY = event.clientY;
    
        //     console.log("Centrul div-ului:", centerX, centerY);
        //     console.log("Partea stanga:", rect.left);

        //     const centerToLeft = centerX - rect.left;
        //     console.log("CenterToLeft",centerToLeft)
            
        //     console.log("Mouse:", mouseX, mouseY);
        //     if((mouseX >= rect.left && mouseX <= centerX) && (mouseY >= rect.top && mouseY <= centerY)) {
        //         card.style.transform = `rotateY(${mouseX / 100 * 2}deg) rotateX(${mouseY /100 * 2}deg)`
        //         card.style.transformStyle = "preserve-3d"
        //     } else if((mouseX <= (rect.left + rect.width) && mouseX >= centerX) && (mouseY >= rect.top && mouseY <= centerY)) {
        //         card.style.transform = `rotateY(-${mouseX / 100 * 2}deg) rotateX(-${mouseY /100 * 2}deg)`
        //     } else {
        //         card.style.transform = `rotateY(0deg) rotateX(0deg)`
        //         // card.style.transformStyle = "preserve-3d"
        //     }
            
    
        // }

        // Atașăm evenimentul de mișcare a cursorului la document
        document.addEventListener('mousemove', handleMouseMove);
        // document.addEventListener('mousemove', animationCard);

        // Curățăm evenimentele atașate când componenta este dezmontată
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            // document.removeEventListener('mousemove', animationCard);
        };
    }, []);

    // Width pentru chart
    const width = window.innerWidth / 100 * 30;

    return (
        <div className='acasaPage'>
            <div id='figura'></div>
            <div className='acasa'>
                <Navbar />
                <main>
                    <div className='sec-1'>
                        <div className='leftCol'>
                            <h1>Transformăm visele în web site-uri funcționale</h1>
                        </div>
                        <div className='rightCol' id='rightCol'>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <span className='over'></span>
                            <div className='contentBoxEx'>
                                <div className='navbarEx'>
                                    <div className='logoEx'>YOUR LOGO</div>
                                    <div className='linksEx'>
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
                                        <AreaChart
                                            className='chart'
                                            width={width}
                                            height={400}
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 20,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <defs>
                                                <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#bd67f7" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#bd67f7" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#33a0ff" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#33a0ff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="5 5" vertical={false} />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "white" }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "white" }} />
                                            <Area type="monotone" dataKey="MobileApps" strokeWidth="5px" stroke="#33a0ff" fillOpacity={.8} fill="url(#colorMobile)" />
                                            <Area type="monotone" dataKey="Websites" strokeWidth="5px" stroke="#bd67f7" fillOpacity={.8} fill="url(#colorWeb)" />
                                        </AreaChart>
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
        </div>
    )
}
