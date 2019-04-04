import React, { Component } from 'react';
import './MapCard.css';
import PreferencePicker from "../../PreferencePicker/PreferencePicker";
import RouteList from "../RouteList/RouteList";

class MapCard extends Component {
    constructor(props) {
        super(props);
        this.state = {preference: 0, result:null};
        this.onPreferencePicker = this.onPreferencePicker.bind(this);
    }

    componentWillMount(){
        this.setState({result: this.props.result});
        this.setState({preference: this.props.preference});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.result !== this.state.result){
            this.setState({result: nextProps.result});
        }
    }

    onPreferencePicker(i) {
        this.setState({preference: i})
    }

    showSelection(){
        let selectionElement = "";
        let selectionText = "";
        switch (this.state.preference){
            case 0:
                selectionElement = "El consumo total de gasolina es: ";
                selectionText = this.state.result.gasLiters.toFixed(2) +  " litros";
                break;

            case 1:
                selectionElement = "El tiempo total para el viaje es: ";
                selectionText = this.state.result.time.toFixed(2) + " horas";
                break;

            case 2:
                selectionElement = "La distancia total del viaje es: ";
                selectionText = this.state.result.distance.toFixed(2)/1000 + " km";
                break;
            default:
                break;
        }
        return (
            <div className="cardSelectionMap UniversLTPro-75Black">
                <span className="map-card-selection">{selectionElement}</span>
                <span className="map-card-selection">{selectionText}</span>
            </div>

        );
    }

    render() {
        return (
            <div className="mapCard">
                <PreferencePicker selectedPreference={this.state.preference} className="map-card-preference-picker" isSmall={true} onPreferencePicker={this.onPreferencePicker} />

                {(this.state.result)? this.showSelection()
                    :
                    ""
                }

                {(this.state.result)?  (

                            <RouteList routes={this.state.result.distancesToTowns} towns={this.state.result.towns}/>
                    )
                    :
                    ""
                }




            </div>
        );
    }
}

export default MapCard;
