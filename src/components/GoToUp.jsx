import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


export default function GoToUp() {
    const [show, setShow] = useState(false);
    const toUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const arrow = () => {
            if(window.pageYOffset >= 300) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        document.addEventListener('scroll', arrow);

        // Curățăm evenimentele atașate când componenta este dezmontată
        return () => {
            document.removeEventListener('scroll', arrow);
        };
    }, [])
  return (
    <div className='goToUp' id='goToUp' onClick={toUp}>
        { show && <div className='arrow'>
                <FaArrowUp className='icon' />
            </div>
        }
    </div>
  )
}
