import React from 'react';

const Introduction = () => {

    return (
        <div id='introduction'>
            <body>
                <p>Galumpher is a free open-source electron desktop application, that allows a user to connect their containers to the app and be able to monitor the health metrics of that container in a visually digestible manner. 
 More information for Podman can be found <a href="https://podman.io/">here</a>.
                </p>
                <h3>But what does Galumpher actually mean?</h3>
                <p> The name Galumpher, orginally came from building off of the seal theme that Podman has (a group of seals is a pod). The term Galumpher is derived from the verb galumphing which describes the seals shuffle movement across land.</p>
            </body>
        </div>
    );
};

export default Introduction;