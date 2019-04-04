import React, { Component } from 'react';
import './Home.css';
import Hero from '../../components/Hero';
import MapImageCard from '../../components/MapImageCard';
import MainForm from '../../components/MainForm';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Hero subtitle="República Mexicana"
                titleTop="Pueblos"
                titleBottom="Mágicos"/>
                <div className="form-wrapper">
                    <MapImageCard/>
                    <MainForm/>
                </div>
            </div>
        );
    }
}

export default Home;
