import React from 'react'
import './Project.css'
import img1 from './img/port.png'
import img2 from './img/india.png'
import img3 from './img/texas.png'
import img4 from './img/campus.png'

const Project = () => {
  return (
    <div className='project'>
        <h1>Project</h1>
        <div className='project__container'>
            <div className='project__card'>
                <img src={img1} alt='project1'/>
                <h2>Project 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                    vestibulum magna sed, convallis ex.</p>

            </div>
            <div className='project__card'>
                <img src={img2} alt='project1'/>
                <h2>Project 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                    vestibulum magna sed, convallis ex.</p>
                    
            </div>
            <div className='project__card'>
                <img src={img3} alt='project1'/>
                <h2>Project 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                    vestibulum magna sed, convallis ex.</p>
                    
            </div>
            <div className='project__card'>
                <img src={img4} alt='project1'/>
                <h2>Project 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                    vestibulum magna sed, convallis ex.</p>
                    
            </div>
        </div>

    </div>
  )
}

export default Project