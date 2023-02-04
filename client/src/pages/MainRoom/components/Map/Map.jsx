import React from "react";
import styles from "./Map.module.css";
// Import the whole library
import * as maptilerClient from '@maptiler/client';

// Or import only the bits you need
import {
  config,
  geocoding,
  geolocation,
  coordinates,
  data,
  staticMaps,
} from '@maptiler/client';
// add your API key
maptilerclient.config.apiKey = "bdysBOq2coBo9pxybIoA";
const Map = () => {
    return <>
        Hello this is the map;
    </>
};

export default Map;
