import React from "react";
import HomePage from './HomePage';
import galumpher from './images/galumphing-icon-1.png'
import NavBar from "./NavBar";


const App = () => {
    return (
        <>
         <div id='app'>
                <h1>Galumpher <img src={galumpher} id='galumpher'/></h1>
         </div>
         <div id='home-page'>
             <NavBar/>
             
             <HomePage />
         </div>
        </>
    )
}

export default App;