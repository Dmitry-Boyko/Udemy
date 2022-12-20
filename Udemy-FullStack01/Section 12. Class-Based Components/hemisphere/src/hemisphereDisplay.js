import React from 'react';
import northPic from './images/north.jpg';
import southPic from './images/south.jpg';

const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'North hemisphere' : 'South hemisphere';
    const picture = latitude > 0 ? northPic : southPic;

    return(
        <div src={picture} alt="" >
            { hemisphere }
        </div>
    )
}

export default HemisphereDisplay;

