import React, { Component } from 'react';
import './Map.css';

class Map extends Component {

    placeMarker(location, title, isCurrentLocation) {
      const google = window.google;
      let marker = new google.maps.Marker({
        position: location,
        title: title,
        map: this.map,
      });

      let newLocation = {lat: location.lat, lng: location.lng}
      let infowindow = new google.maps.InfoWindow({
        content: title,
        position: newLocation,
        pixelOffset: new google.maps.Size(-1.5, -40),
      });
      if (isCurrentLocation === true) {
        infowindow.open(this.map);
      }
      google.maps.event.addListener(marker , 'click', function(){
        infowindow.open(this.map);
      });

    }

    constructor(props) {
      super(props);
      this.state = {result:null};
      this.placeMarker = this.placeMarker.bind(this)
    }

    componentWillMount(){
        this.setState({result: this.props.result});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.result !== this.state.result){
            this.setState({result: nextProps.result}, () => {
                this.setupMap();
            });
        }
    }

    componentDidMount(){

    }


    setupMap(){
      const google = window.google;
      let center = {
          lat:  20.082246,
          lng: -109.551961
      } ;
      this.map = new google.maps.Map(this.refs.map, {
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        center: center,
        zoom: 5
      });


      let result = this.state.result;
      let originCoordinate = {
          name: result.origin.name,
          lat: result.origin.latitude,
          lng: result.origin.longitude
      };

      let destinyCoordinate = {
          name: result.destination.name,
          lat: result.destination.latitude,
          lng: result.destination.longitude
      };

      this.placeMarker(originCoordinate,originCoordinate.name, false);
      this.placeMarker(destinyCoordinate,destinyCoordinate.name, false);

        //***********ROUTING****************//

        //Intialize the Direction Service
        let service = new google.maps.DirectionsService();



      //-------------Routing Begin----------------------------
        let routeRender = [];

        let currentWayPoint = 0;
        let topSize = 6;
        if(result.towns.length === 112){
            topSize = 7;
        }

        for(let j = 0; j < 6;j++){
            let directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(this.map);
            directionsDisplay.setOptions({
                suppressMarkers: true,
                preserveViewport: true,
                routeIndex: 0,
            });

            let lat_lng = [];


            if( j === 5){
              for (let i = 0; i < topSize; i++) {
                  let data = result.towns[currentWayPoint];
                  let myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
                  lat_lng.push({
                      location: myLatlng,
                      stopover: true,
                  });
                  currentWayPoint++;
              }
                currentWayPoint --;
            }else {
                for (let i = 0; i < 22; i++) {
                    let data = result.towns[currentWayPoint];
                    let myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
                    lat_lng.push({
                        location: myLatlng,
                        stopover: true,
                    });
                    //console.log(currentWayPoint);
                    currentWayPoint++;
                }
                currentWayPoint --;
            }

            let wayPointRender = {
              directionsDisplay: directionsDisplay,
              lat_lng: lat_lng
            };

            routeRender.push(wayPointRender);
        }

        for(let i = 0; i < 6 ; i++){
            service.route({
                origin: routeRender[i].lat_lng[0].location,
                destination: routeRender[i].lat_lng[routeRender[i].lat_lng.length - 1].location,
                waypoints: routeRender[i].lat_lng,
                optimizeWaypoints: false,
                travelMode: 'DRIVING',
            }, function (result, status) {
                if (status === 'OK') {
                    routeRender[i].directionsDisplay.setDirections(result)
                }
            });
        }

    }



    render() {
        return (
          <div ref="map" className="map"></div>
        );
    }
}

export default Map;
