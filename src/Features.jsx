import React from 'react';
import screenshot from './images/galumper interface.png'

const Features = () => {

    return (
        <div id="features"> 
            <ul>
                <li>Galumpher will display all of the containers that are currently running on the machine in the dropdown menu located in the sidebar.</li>
                <li>The main metrics page will display the metrics of the first container on the list by default.</li>
                <li>Clicking on a different container within the dropdown will automatically fetch the most recent metrics for that container and load them into the metrics display section.</li>
                <li>Key metrics currently available are CPU usage, memory usage, and net input/output.</li>
                <li>All figures are displayed in MB.</li>
            </ul>
                <img src={screenshot} id='featureimg'/>  
        </div>
    );
};

export default Features;