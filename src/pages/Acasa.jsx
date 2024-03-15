import React, { useEffect } from 'react';
import Img1 from '../assets/imgs/Poza 1.png'

export default function Acasa() {
  return (
    <div className='acasa'>
        <main>
            <div className='sec-2'>
                <div className='imgsLeft'>
                    <img id='img1' src={Img1} alt='Simbol img 1' />
                </div>
                <div className='textRight'>
                    <p>La Midas Group, credem că fiecare afacere merită să aibă un site web care să se ridice la standardele cele mai înalte de calitate și profesionalism. Suntem dedicați să creăm site-uri web personalizate și inovatoare pentru clienții noștri. Indiferent dacă sunteți o afacere mică sau o corporație mare, suntem aici pentru a vă ajuta să vă transformați viziunea în realitate digitală.</p>
                </div>
            </div>
        </main>
    </div>
  )
}
