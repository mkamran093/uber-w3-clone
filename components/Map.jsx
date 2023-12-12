"use client";

import React, { useEffect,useRef,useState } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: `flex-1 h-full w-full`
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWthbXJhbjA5MiIsImEiOiJjbHBzb2kwczMwNTRjMnFxbWtqeW54cnhqIn0.ikaSlRY87X6QMNqJhWRZbA';
// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const Map = () => {
  
  const map = useRef(null);
  const [lng, setLng] = useState(73);
  const [lat, setLat] = useState(33);
  const [zoom, setZoom] = useState(5);
    
    useEffect(() => {
      if (map.current) return; 
      map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
    });
    
  return (
    <div className={style.wrapper} id='map' />
  )
}

export default Map
