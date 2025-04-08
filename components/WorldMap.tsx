"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const destinations = [
  { name: "Kyoto", coordinates: [135.7681, 35.0116] },
  { name: "Swiss Alps", coordinates: [8.2275, 46.8182] },
  { name: "Black Forest", coordinates: [8.2, 48.0] },
  { name: "Banff", coordinates: [-115.5708, 51.1784] },
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Paris", coordinates: [2.3522, 48.8566] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Sahara", coordinates: [13.0, 23.0] },
  { name: "Atacama", coordinates: [-68.25, -24.5] },
  { name: "Wadi Rum", coordinates: [35.4194, 29.5328] },
  { name: "Death Valley", coordinates: [-116.8258, 36.5054] },
  { name: "Maldives", coordinates: [73.2207, 3.2028] },
  { name: "Bora Bora", coordinates: [-151.7415, -16.5004] },
  { name: "Tulum", coordinates: [-87.4667, 20.211] },
  { name: "Bali", coordinates: [115.1889, -8.4095] },
];

export default function WorldMap() {
  return (
    <section className="w-full h-[80vh] z-50 bg-white flex items-center justify-center">
      <ComposableMap
        projection="geoEqualEarth"
        width={980}
        height={500}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#e0e0e0",
                      stroke: "#ffffff",
                      strokeWidth: 0.3,
                      outline: "none",
                    },
                    hover: {
                      fill: "#b0bec5",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {destinations.map(({ name, coordinates }, i) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#2563eb" />
              <text
                textAnchor="middle"
                y={-12 - i * 0.5}
                style={{
                  fontSize: "9px",
                  fill: "#333",
                  pointerEvents: "none",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </section>
  );
}
