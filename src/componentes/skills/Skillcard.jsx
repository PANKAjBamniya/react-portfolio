import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";


const Skillcard = () => {
  return (
    <div className='skills-container'>
          <div className="skills-card">
                <FaHtml5 className='html-icon' />
                <h1>HTML5</h1>
            </div>
            <div className="skills-card">
                <FaCss3Alt className='css-icon' />
                <h1>CSS3</h1>
            </div>
            <div className="skills-card">
                <RiTailwindCssFill className='tail-icon'/>
                <h1>TailwindCss</h1>
            </div>
            <div className="skills-card">
                <FaBootstrap className='boot-icon'/>
                <h1>Bootstrap</h1>
            </div>
            <div className="skills-card">
                <IoLogoJavascript className='js-icon'/>
                <h1>JavaScript</h1>
            </div>
            <div className="skills-card">
                 <FaReact className='react-icon'/>
                <h1>React</h1>
            </div>
            <div className="skills-card">
            <RiNextjsFill className='next-icon' />
                <h1>Next</h1>
            </div>
            <div className="skills-card">
            <SiMongodb className='mg-icon'/>
                <h1>Mongo DB</h1>
            </div>
    </div>
  )
}

export default Skillcard