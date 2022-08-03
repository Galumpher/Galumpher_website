import React from 'react';
import denny from './images/Denny.jpg'
import jary from './images/Jary.jpg'
import tranimal from './images/Tranimal.jpg'
import shelbot from './images/Shelbot.jpg'

const AboutUs = () => {

  return (
    <div id='about-us'>
        <div id='profile'>
          <h3> <img src={denny} id='img'/> Dennis Ly</h3>
            <ul>
              <li>Dennis Loves taking his dog out "to do its business"</li>
              <a href="https://github.com/Dennishly">GitHub</a> <a href="https://www.linkedin.com/in/dennishly/">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={jary} id='img'/> Jared Veltsos</h3>
            <ul>
              <li>Jared Loves Long walks on the beach and his child</li>
              <a href="https://github.com/toastMaduro-hub">GitHub</a> <a href="https://www.linkedin.com/in/jaredveltsos">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={tranimal} id='img'/> Tran Nguyen</h3>
            <ul>
              <li>Tran loves being the Tranimal</li>
              <a href="https://github.com/Tranimal-N">GitHub</a> <a href="https://www.linkedin.com/in/tranmcfarlandnguyen/">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={shelbot} id='img'/> Shelby Carlin</h3>
            <ul>
              <li>Shelby hates germs</li>
              <a href="https://github.com/shelbycarlin">GitHub</a> <a href="https://www.linkedin.com/in/shelbycarlin/">LinkedIn</a>
            </ul>
        </div>
      

    </div>
  )
}

export default AboutUs