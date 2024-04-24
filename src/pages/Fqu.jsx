import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fqu from '../data/Fqu';

export default function Fqu() {
  return (
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
  )
}
