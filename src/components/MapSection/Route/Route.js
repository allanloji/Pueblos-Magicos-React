import React, { Component } from 'react';
import "./Route.css";

class Route extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="routeCard">
                <span className="routeCardOrigin"><span className="destinyCircle"/>{this.props.towns[this.props.index].name} </span>
                <div className="verticalLine"></div>
                <span className="routeCardDestiny"><span className="circle"/>{this.props.towns[this.props.index+1].name}</span>
                <span className="routeCardDistance">{this.props.route / 1000} km</span>
            </div>
        )
    }
}

export default Route;