import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        center: [121.5654, 25.0330], // Coordinates for Taiwan
        scale: 300
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[121.5654, 25.0330]} // Coordinates for Taiwan
        dx={-20}
        dy={-40}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Taipei"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
