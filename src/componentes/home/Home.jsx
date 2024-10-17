import React from 'react';
import './Home.css';
import Pnkj from "../home/pankaj.png"

const Home = () => {
  return (
    <div className='home'>
        <div className="home-contant">
            <h1>Portfolio.</h1>
            <hr />
            <div className="cont">
                <img src={Pnkj} alt="my-img" />
                <h3>By Pankaj Bamniya</h3>
                <p>Bamniya853@gmail.com</p>
            </div>
        </div>
        <div className="home-img">
        {/* <h1>helloo</h1> */}
        </div>
    </div>
  )
}

export default Home