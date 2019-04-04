import React, { Component } from 'react';
import Map from "./Map";
import './MapSection.css';
import MapCard from "./MapCard/MapCard";
import axios from "axios/index";
import queryString from 'query-string'

class MapSection extends Component {

    constructor(props) {
        super(props);
        this.state = {result: undefined, origin: undefined, destination: undefined,
            kml: undefined, preference: undefined};
        this.getRoute = this.getRoute.bind(this);
    }

    componentWillMount() {
        const parsed = queryString.parse(this.props.location.search);
        let origin = ''
        let destination = ''
        let kml = ''
        let preference = ''
        if (typeof parsed.origin === 'string' && parsed.origin.trim().length > 0) {
            origin = Number(parsed.origin)
        }
        if (typeof parsed.destination === 'string' && parsed.destination.trim().length > 0) {
            destination = Number(parsed.destination)
        }
        if (typeof parsed.kml === 'string' && parsed.kml.trim().length > 0) {
            kml = Number(parsed.kml)
        }
        if (typeof parsed.preference === 'string' && parsed.preference.trim().length > 0) {
            preference = Number(parsed.preference)
        }
        this.setState({origin, destination, kml, preference}, () => this.getRoute())
    }

    getRoute() {
        axios.get("http://192.168.100.15:8080/v1/algorithm/shortest_route?town1=" + this.state.origin + "&town2="+ this.state.destination
            +"&kml=" + this.state.kml).then(res => {
            this.setState({result: res.data});
        });
    }

    render() {
        const { result, preference } = this.state
        return (
            <div className="mapContainer">
               <Map result={result}/>
               <MapCard result={result} preference={preference}/>
           </div>
        );
    }
}

export default MapSection;
