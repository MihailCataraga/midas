import React, { useEffect, useState } from 'react';
import { FaSearch, FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import data from '../data/ChartData';
import Img1 from '../assets/imgs/Poza 1.png';
import Img2 from '../assets/imgs/Poza 2.png';
import Img3 from '../assets/imgs/Poza 3.png';
import Navbar from '../components/Navbar';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import dataCard from '../data/CardData';

export default function Acasa() {
    const [dot, setDot] = useState(1);
    const [opacity1, setOpacity1] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);
    const [opacity4, setOpacity4] = useState(0);
    const [opacity5, setOpacity5] = useState(0);
    const [opacity6, setOpacity6] = useState(0);
    const click = () => {
        const card = document.getElementById('cardBox');
        card.style.animation = 'display 10s linear infinite';
    }

    useEffect(() => {
        // // Carousel
        // const copyCarousel = document.querySelector('.carousel').cloneNode(true);
        // document.querySelector('.carousel').appendChild(copyCarousel);

        const interval = setInterval(() => {
            setDot(prevDot => (prevDot < dataCard.length ? prevDot + 1 : 1));
        }, 10000);

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

        //Scroll
        const handleScroll = (event) => {

            const scrollY = window.scrollY;
            console.log(scrollY)
            // Aici puteți ajusta valorile la care doriți să înceapă și să se oprească modificarea opacității
            const startScroll = 1500; // Opacitatea începe să crească de la această valoare de derulare
            const stopScroll = 2100; // Opacitatea se oprește să crească de la această valoare de derulare
            // Calculăm opacitatea în funcție de poziția de derulare
            const newOpacity1 = Math.min(1, (scrollY - 1500) / (2100 - 1500));
            // Actualizăm starea opacității
            setOpacity1(newOpacity1);
            const newOpacity2 = Math.min(1, (scrollY - 2300) / (2900 - 2300));
            // Actualizăm starea opacității
            setOpacity2(newOpacity2);
            const newOpacity3 = Math.min(1, (scrollY - 3200) / (3800 - 3200));
            // Actualizăm starea opacității
            setOpacity3(newOpacity3);
            const newOpacity4 = Math.min(1, (scrollY - 4100) / (4700 - 4100));
            // Actualizăm starea opacității
            setOpacity4(newOpacity4);
            const newOpacity5 = Math.min(1, (scrollY - 5000) / (5600 - 5000));
            // Actualizăm starea opacității
            setOpacity5(newOpacity5);
            const newOpacity6 = Math.min(1, (scrollY - 5900) / (6500 - 5900));
            // Actualizăm starea opacității
            setOpacity6(newOpacity6);
        }

        // Atașăm evenimentul de mișcare a cursorului la document
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleScroll);

        // Curățăm evenimentele atașate când componenta este dezmontată
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
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
                        </div>
                        <div className='textRight'>
                            <p>La Midas Group, credem că fiecare afacere merită să aibă un site web care să se ridice la standardele cele mai înalte de calitate și profesionalism. Suntem dedicați să creăm site-uri web personalizate și inovatoare pentru clienții noștri. Indiferent dacă sunteți o afacere mică sau o corporație mare, suntem aici pentru a vă ajuta să vă transformați viziunea în realitate digitală.</p>
                        </div>
                    </div>
                    <div className='sec-3'>
                        <div className='left'>
                            <h2>Ce tipuri de website-uri realizăm?</h2>
                        </div>
                        <div className='right'>
                            <div className='cards'>
                                <div className='card'>
                                    <h3><CgWebsite className='icon' />{dataCard[0].title}</h3>
                                    <p>{dataCard[0].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[0].ideas[0]}</span>
                                        <span>{dataCard[0].ideas[1]}</span>
                                        <span>{dataCard[0].ideas[2]}</span>
                                        <span>{dataCard[0].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity1}}>
                                    <h3><CgWebsite className='icon' />{dataCard[1].title}</h3>
                                    <p>{dataCard[1].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[1].ideas[0]}</span>
                                        <span>{dataCard[1].ideas[1]}</span>
                                        <span>{dataCard[1].ideas[2]}</span>
                                        <span>{dataCard[1].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity2}}>
                                    <h3><CgWebsite className='icon' />{dataCard[2].title}</h3>
                                    <p>{dataCard[2].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[2].ideas[0]}</span>
                                        <span>{dataCard[2].ideas[1]}</span>
                                        <span>{dataCard[2].ideas[2]}</span>
                                        <span>{dataCard[2].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity3}}>
                                    <h3><CgWebsite className='icon' />{dataCard[3].title}</h3>
                                    <p>{dataCard[3].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[3].ideas[0]}</span>
                                        <span>{dataCard[3].ideas[1]}</span>
                                        <span>{dataCard[3].ideas[2]}</span>
                                        <span>{dataCard[3].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity4}}>
                                    <h3><CgWebsite className='icon' />{dataCard[4].title}</h3>
                                    <p>{dataCard[4].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[4].ideas[0]}</span>
                                        <span>{dataCard[4].ideas[1]}</span>
                                        <span>{dataCard[4].ideas[2]}</span>
                                        <span>{dataCard[4].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity5}}>
                                    <h3><CgWebsite className='icon' />{dataCard[5].title}</h3>
                                    <p>{dataCard[5].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[5].ideas[0]}</span>
                                        <span>{dataCard[5].ideas[1]}</span>
                                        <span>{dataCard[5].ideas[2]}</span>
                                        <span>{dataCard[5].ideas[3]}</span>
                                    </div>
                                </div>
                                <div className='card' style={{opacity: opacity6}}>
                                    <h3><CgWebsite className='icon' />{dataCard[6].title}</h3>
                                    <p>{dataCard[6].text}</p>
                                    <div className='ideas'>
                                        <span>{dataCard[6].ideas[0]}</span>
                                        <span>{dataCard[6].ideas[1]}</span>
                                        <span>{dataCard[6].ideas[2]}</span>
                                        <span>{dataCard[6].ideas[3]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Tehnologiile folosite de echipa noastra</h2>
                    <div className='sec-4'>
                        <div className='carouselBox'>
                            <div className='left'></div>
                            <div className='right'></div>
                            <ul className='carousel'>
                                <li><FaHtml5 className='icon' id='html' /><span>HTML</span></li>
                                <li><FaCss3Alt className='icon' id='css' /><span>CSS</span></li>
                                <li><FaSass className='icon' id='sass' /><span>SASS</span></li>
                                <li><TbBrandJavascript className='icon' id='js' /><span>JavaScript</span></li>
                                <li><FaReact className='icon' id='react' /><span>React</span></li>
                                <li><SiRedux className='icon' id='redux' /><span>Redux</span></li>
                                <li><FaNodeJs className='icon' id='node' /><span>Node.js</span></li>
                                <li><SiExpress className='icon' id='express' /><span>Express.js</span></li>
                                <li><SiMongodb className='icon' id='mongo' /><span>MongoDB</span></li>
                                <li><FaDatabase className='icon' id='sql' /><span>Sql</span></li>
                                <li><FaHtml5 className='icon' id='html' /><span>HTML</span></li>
                                <li><FaCss3Alt className='icon' id='css' /><span>CSS</span></li>
                                <li><FaSass className='icon' id='sass' /><span>SASS</span></li>
                                <li><TbBrandJavascript className='icon' id='js' /><span>JavaScript</span></li>
                                <li><FaReact className='icon' id='react' /><span>React</span></li>
                                <li><SiRedux className='icon' id='redux' /><span>Redux</span></li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
