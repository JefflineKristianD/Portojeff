import React from 'react'
import './intro.css';
import Foto from '../../assets/Fotosaya.jpg';

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <img src={Foto} alt='Foto' className='Fotosaya'/>
            <span className='Hello'>Hello, I'am </span>
            <span className='introName'>Jeffline</span>
            <p className='introPara'>Mobile Developer and Front End Developer</p>
        </div>
    </section>
  )
}

export default intro;