import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { BiSolidBookContent } from "react-icons/bi";
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


            window.requestAnimationFrame(() => {
                // const scroll = window.scrollY;
                // console.log(scroll);

                const test = document.getElementById('test');
                if (window.scrollY >= 1299) {
                    // elem.style.position = "fixed";
                    const top = window.scrollY - 1370 + 200
                    test.style.paddingTop = (window.scrollY - 1350 + 200) + 'px';
                }
                if (window.scrollY >= 3099) {
                    // elem.style.position = "fixed";
                    const top = 3100 - 1350 + 200
                    test.style.paddingTop = (3100 - 1350 + 200) + 'px';

                    // card.style.paddingBottom = top * 2 + 'px';
                }
                const text = document.getElementById('text');
                if (window.scrollY >= 1299) {
                    // elem.style.position = "fixed";
                    const top = window.scrollY - 1350
                    text.style.paddingTop = (window.scrollY - 1350) * 2 + 'px';
                }
                if (window.scrollY >= 3099) {
                    // elem.style.position = "fixed";
                    text.style.paddingTop = (3100 - 1350) * 2 + 'px';
                    // card.style.paddingBottom = top * 2 + 'px';
                }
                const card = document.getElementById('card');
                if (window.scrollY >= 1299) {
                    // elem.style.position = "fixed";
                    // const top = window.scrollY - 1350
                    card.style.paddingTop = (window.scrollY - 1350) * 2 + 'px';
                    // card.style.paddingBottom = top * 2 + 'px';
                }
                if (window.scrollY >= 3100) {
                    // elem.style.position = "fixed";
                    // const top = 3100 - 1350
                    card.style.paddingTop = (3100 - 1350) * 2 + 'px';
                    // card.style.paddingBottom = top * 2 + 'px';
                }
                const card2 = document.getElementById('card2');
                if (window.scrollY >= 1599) {
                    // elem.style.position = "fixed";
                    card2.style.display = 'initial'
                    card2.style.animation = 'card2-1 0.5s ease-in-out'

                }
                if (window.scrollY < 1599) {
                    // elem.style.position = "fixed";
                    card2.style.animation = 'card2-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card2.style.display = 'none'
                    }, 400)

                }
                const card3 = document.getElementById('card3');
                if (window.scrollY >= 1899) {
                    // elem.style.position = "fixed";
                    card3.style.display = 'initial'
                    card3.style.animation = 'card3-1 0.5s ease-in-out'

                }
                if (window.scrollY < 1899) {
                    // elem.style.position = "fixed";
                    card3.style.animation = 'card3-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card3.style.display = 'none'
                    }, 400)

                }
                const card4 = document.getElementById('card4');
                if (window.scrollY >= 2199) {
                    // elem.style.position = "fixed";
                    card4.style.display = 'initial'
                    card4.style.animation = 'card4-1 0.5s ease-in-out'

                }
                if (window.scrollY < 2199) {
                    // elem.style.position = "fixed";
                    card4.style.animation = 'card4-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card4.style.display = 'none'
                    }, 400)

                }
                const card5 = document.getElementById('card5');
                if (window.scrollY >= 2499) {
                    // elem.style.position = "fixed";
                    card5.style.display = 'initial'
                    card5.style.animation = 'card5-1 0.5s ease-in-out'

                }
                if (window.scrollY < 2499) {
                    // elem.style.position = "fixed";
                    card5.style.animation = 'card5-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card5.style.display = 'none'
                    }, 400)

                }
                const card6 = document.getElementById('card6');
                if (window.scrollY >= 2799) {
                    // elem.style.position = "fixed";
                    card6.style.display = 'initial'
                    card6.style.animation = 'card6-1 0.5s ease-in-out'

                }
                if (window.scrollY < 2799) {
                    // elem.style.position = "fixed";
                    card6.style.animation = 'card6-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card6.style.display = 'none'
                    }, 400)

                }
                const card7 = document.getElementById('card7');
                if (window.scrollY >= 3099) {
                    // elem.style.position = "fixed";
                    card7.style.display = 'initial'
                    card7.style.animation = 'card7-1 0.5s ease-in-out'

                }
                if (window.scrollY < 3099) {
                    // elem.style.position = "fixed";
                    card7.style.animation = 'card7-2 0.5s ease-in-out'
                    setTimeout(() => {
                        card7.style.display = 'none'
                    }, 400)

                }
            })
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
                    <div className='sec-6'>
                        <div className='left'>
                            <h2>Ce tipuri de website-uri realizăm?</h2>
                        </div>
                        <div className='right'>
                            <div className='card'>

                            </div>
                            <div className='card' style={{opacity: opacity1}}>

                            </div>
                            <div className='card' style={{opacity: opacity2}}>

                            </div>
                            <div className='card' style={{opacity: opacity3}}>

                            </div>
                            <div className='card' style={{opacity: opacity4}}>

                            </div>
                            <div className='card' style={{opacity: opacity5}}>

                            </div>
                            <div className='card' style={{opacity: opacity6}}>

                            </div>
                        </div>
                    </div>
                    {/* <div className='sec-5'>
                        <div className='left-text' id='text'>
                            <h2>Ce tipuri de website-uri realizăm?</h2>
                        </div>
                        <div className='rightCol' id='card'>
                            <div className='multiCards'>
                                <div className='cardBox' id='card1'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card2'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card3'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card4'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card5'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card6'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='cardBox' id='card7'>
                                    <div className='card'>
                                        <div className='top'>
                                            <BiSolidBookContent className='icon' />
                                            <h3>{dataCard[dot - 1].title}</h3>
                                        </div>
                                        <p className='text'>{dataCard[dot - 1].text}</p>
                                        <div className='ideas'>
                                            {dataCard[dot - 1].ideas.map((idea) => {
                                                return (
                                                    <span key={idea}>{idea}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cardDot'>
                                {dataCard.map((item) => {
                                    return (
                                        <div
                                            className={dot === item.id ? 'dot active' : 'dot'}
                                            key={item.id}
                                            onClick={() => setDot(item.id)}
                                        >
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div id='test'>
                        <p>gfdgsfdhgsfdghsgfdhsgfhh</p>
                    </div> */}
                    <div className='sec-4'>
                        <div className='left-text'>
                            <h2>Ce tipuri de website-uri realizăm?</h2>
                        </div>
                        <div className='rightCol'>
                            <div className='cardBox' id='cardBox'>
                                <div className='card' id='card'>
                                    <div className='top'>
                                        <BiSolidBookContent className='icon' />
                                        <h3>{dataCard[dot - 1].title}</h3>
                                    </div>
                                    <p className='text'>{dataCard[dot - 1].text}</p>
                                    <div className='ideas'>
                                        {dataCard[dot - 1].ideas.map((idea) => {
                                            return (
                                                <span key={idea}>{idea}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='cardDot'>
                                {dataCard.map((item) => {
                                    return (
                                        <div
                                            className={dot === item.id ? 'dot active' : 'dot'}
                                            key={item.id}
                                            onClick={() => { setDot(item.id); click() }}
                                        >
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='sec-3'>
                        <div className='left-text'>
                            <h2>Ce tipuri de website-uri realizăm?</h2>
                        </div>
                        <div className='rightCol'>
                            <div className='cardBox' id='cardBox'>
                                <div className='card' id='card'>
                                    <div className='top'>
                                        <BiSolidBookContent className='icon' />
                                        <h3>{dataCard[dot - 1].title}</h3>
                                    </div>
                                    <p className='text'>{dataCard[dot - 1].text}</p>
                                    <div className='ideas'>
                                        {dataCard[dot - 1].ideas.map((idea) => {
                                            return (
                                                <span key={idea}>{idea}</span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='cardDot'>
                                {dataCard.map((item) => {
                                    return (
                                        <div
                                            className={dot === item.id ? 'dot active' : 'dot'}
                                            key={item.id}
                                            onClick={() => setDot(item.id)}
                                        >
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
