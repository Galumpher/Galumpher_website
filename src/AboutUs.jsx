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
              <li>Currently residing in Los Angeles, Dennis loves to snowboard, surf, workout and attend live music events. </li>
              <a href="https://github.com/Dennishly">GitHub</a> <a href="https://www.linkedin.com/in/dennishly/">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={jary} id='img'/> Jared Veltsos</h3>
            <ul>
              <li>Jared lives in Hawai’i and when he's not coding he enjoys the ocean and his family.</li>
              <a href="https://github.com/toastMaduro-hub">GitHub</a> <a href="https://www.linkedin.com/in/jaredveltsos">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={tranimal} id='img'/> Tran Nguyen</h3>
            <ul>
              <li>Tran lives in the San Francisco Bay Area and LOVES adventures, music, dance, and nerdy science / tech things.</li>
              <a href="https://github.com/Tranimal-N">GitHub</a> <a href="https://www.linkedin.com/in/tranmcfarlandnguyen/">LinkedIn</a>
            </ul>
        </div>
        <br />
        <div id='profile'>
          <h3> <img src={shelbot} id='img'/> Shelby Carlin</h3>
            <ul>
              <li>Shelby currently resides in the bay area and enjoying marathon running and cooking!</li>
              <a href="https://github.com/shelbycarlin">GitHub</a> <a href="https://www.linkedin.com/in/shelbycarlin/">LinkedIn</a>
            </ul>
        </div>
      

    </div>
  )
}

export default AboutUs