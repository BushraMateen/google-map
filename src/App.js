import React, { useState } from 'react';
import  BingMapsReact from "bingmaps-react";
import './App.css';


const MapContainer = () => {
  const [map,setMap] = useState()
  
  const mapStyles = {
    height: "25px",
    weight : "25px"
    
  };
  const infobox = () => {
    const center = {title: 'Map Center', description: 'Seattle', visible: false}
  }
  // const defaultCenter = {
  //   lat: 41.3851, lng:2.1734
  // }

  // var map = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {});
  // var pushpin = new window.Microsoft.Maps.Pushpin(map.getCenter(), null);
  // map.entities.push(pushpin);
  const pushPin = {
    center: {
      latitude: 17.3297,
      longitude:76.8343,
    },
    options: {
      title: "Kalaburgi",
    },
  }
  
  const pushPins = [pushPin];
  
 
  return(
    <div className='App'>
      <div className='App-header'>
      <div className='mapView'> 
            <div className='map-container'>
               <BingMapsReact
                bingMapsKey = "AuuFKrGBGetYti2EVYWg9Qt1OVhag1QTSJkyREwMyKDAsqEJSShkxHKaahe9WlDc"
                MapContainerStyle={mapStyles}
                zoom={13}
                // center = {defaultCenter}  
                pushPins={pushPins}
                viewOptions={{ center: { latitude: 17.3297, longitude: 76.8343} }}
                /> 
            </div>
            <div className='sidebar'>
                sidebar
            </div>
          </div>
      </div>
      
    </div>
    
    
    
  )
}
export default MapContainer