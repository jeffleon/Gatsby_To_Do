import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import "./styles/map.css";

const Mapa = ({location}) => {
    return(
        <Map center={[4.643881, -74.095927]} zoom={12}>
             <TileLayer
             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker key={1} position={[location.state.lat, location.state.lng]}/>
        </Map>
    )
}

export default Mapa