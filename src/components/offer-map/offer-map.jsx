import React, {Component} from "react";
import leaflet from 'leaflet';

class OfferMap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const city = [52.38333, 4.9];
        const icon = leaflet.icon({
            iconUrl: `img/pin.svg`,
            iconSize: [30, 30]
        });
        const zoom = 12;
        const Map = leaflet.map(`map`, {
            center: city,
            zoom: zoom,
            zoomControl: false,
            marker: true
        });
        leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, { 
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(Map);

        const placesInfo = this.props.places;
        placesInfo.map((place) => {
            let offerCords = [place.coordinates.lat, place.coordinates.lnt];
            leaflet.marker(offerCords, {icon}).addTo(Map);
        });

        Map.setView(city, zoom);
    }

    render(){

        
        return (
            <section className="cities__map map">
                <div className={`property__map map`} width="512px" height="760px" id="map" style={{height: 1000}}></div>
            </section>
        );
    }
};

export default OfferMap;