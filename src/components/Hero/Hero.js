import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        const { subtitle, titleTop, titleBottom } = this.props;
        return (
            <div className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="hero-image-triangle"/>
                    <div className="hero-image-overlay"/>
                    <div className="hero-image"/>
                    <span className="hero-subtitle UniversLTPro-85XBlack">
                        {subtitle}
                    </span>
                    <span className="hero-titleTop AbrilFatface-Regular">
                        {titleTop}
                    </span>
                    <span className="hero-titleBottom AbrilFatface-Regular">
                        {titleBottom}
                    </span>
                </div>
            </div>
        );
    }
}

export default Hero;
