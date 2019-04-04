import React, { Component } from 'react';
import './MapImageCard.css';

class MapImageCard extends Component {

    render() {
        return (
            <div className="map-image-container">
                <div className="map-image" style={{"transform" : `rotate(
                    ${(-7 * 1024 /
                    Math.max(document.documentElement.clientWidth,
                    window.innerWidth || 0))}deg)`}}/>
            </div>
        );
    }
}

export default MapImageCard;
