import React from 'react';
import './skills.css';
import HTMLDesign from '../../assets/htmlicon1.png';
import GifpyDesign from '../../assets/py.png';
import ReactDesign from '../../assets/Reactpic1.png';
import JavaDesign from '../../assets/Java.png';
import AndroidDesign from '../../assets/androidicon.png'
import KotlinDesign from '../../assets/kotlinicon.png'

const Skills = () => {
  return (
    <section id='skills'>
        <div>
            <h1 className='aboutme'>
                About Me
            </h1>

            <p className='desc'>I am a Mobile Developer and Front End Developer, I always feel excited when learning new things. Every challenge in mobile and front-end application development makes me more curious. For me, learning is a never-ending journey, and I love to dig deeper, either alone in my free time or with friends in a project.

I believe that code quality is everything. So, I always try to follow industry standards. Practicing coding every day is a way for me to continue to grow and understand new technologies that can be applied.</p>
        </div>

        <span className='skillTitle'>My Skills Overall</span>
        <span className='skillDesc'>I am skilled and passionate as a Mobile Developer</span>
        <div className='skillBars'>
            <div className='skillBar'>
            <img src={HTMLDesign} alt='HTMLDesign' className='skillBarImg'/>
            <h2 className='html'>HTML</h2>
            </div>

            <div className='skillBar'>
            <img src={GifpyDesign} alt='GifpyDesign' className='skillBarImg'/>
            <h2 className='python'>Python</h2>
            </div>

            <div className='skillBar'>
            <img src={ReactDesign} alt='ReactDesign' className='skillBarImg'/>
            <h2 className='react'>React</h2>
            </div>
            <div className='skillBar'>
            <img src={JavaDesign} alt='JavaDesign' className='skillBarImg'/>
            <h2 className='java'>Java</h2>
            </div>
            <div className='skillBar'>
            <img src={AndroidDesign} alt='AndroidDesign' className='skillBarImg'/>
            <h2 className='android'>Android</h2>
            </div>
            <div className='skillBar'>
            <img src={KotlinDesign} alt='KotlinDesign' className='skillBarImg'/>
            <h2 className='kotlin'>Kotlin</h2>
            </div>
        </div>

        
    </section>
    )
}

export default Skills;