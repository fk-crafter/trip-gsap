"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { useState } from "react";
import Image from "next/image";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const destinations = [
  {
    name: "Kyoto",
    coordinates: [135.7681, 35.0116],
    image: "/kyoto.jpg",
  },
  {
    name: "Swiss Alps",
    coordinates: [8.2275, 46.8182],
    image: "/swiss-alps.jpg",
  },
  {
    name: "Black Forest",
    coordinates: [8.2, 48.0],
    image: "/black-forest.jpg",
  },
  {
    name: "Banff",
    coordinates: [-115.5708, 51.1784],
    image: "/banff.jpg",
  },
  {
    name: "New York",
    coordinates: [-74.006, 40.7128],
    image: "/new-york.jpg",
  },
  {
    name: "Tokyo",
    coordinates: [139.6917, 35.6895],
    image: "/tokyo.jpg",
  },
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
    image: "/paris.jpg",
  },
  {
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    image: "/sydney.jpg",
  },
  {
    name: "Sahara",
    coordinates: [13.0, 23.0],
    image: "/sahara.jpg",
  },
  {
    name: "Atacama",
    coordinates: [-68.25, -24.5],
    image: "/atacama.jpg",
  },
  {
    name: "Wadi Rum",
    coordinates: [35.4194, 29.5328],
    image: "/wadi-rum.jpg",
  },
  {
    name: "Death Valley",
    coordinates: [-116.8258, 36.5054],
    image: "/death-valley.jpg",
  },
  {
    name: "Maldives",
    coordinates: [73.2207, 3.2028],
    image: "/maldives.jpg",
  },
  {
    name: "Bora Bora",
    coordinates: [-151.7415, -16.5004],
    image: "/bora-bora.jpg",
  },
  {
    name: "Tulum",
    coordinates: [-87.4667, 20.211],
    image: "/tulum.jpg",
  },
  {
    name: "Bali",
    coordinates: [115.1889, -8.4095],
    image: "/bali.jpg",
  },
];

export default function WorldMap() {
  const [selected, setSelected] = useState<null | (typeof destinations)[0]>(
    null
  );

  return (
    <section className="w-full h-[90vh] z-50 bg-white flex items-center justify-center relative">
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

          {destinations.map((dest) => (
            <Marker
              key={dest.name}
              coordinates={dest.coordinates}
              onClick={() => setSelected(dest)}
              style={{ cursor: "pointer" }}
            >
              <circle r={6} fill="#2563eb" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {selected && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 flex items-center gap-4 max-w-md z-20 border">
          <Image
            src={selected.image}
            alt={selected.name}
            width={80}
            height={80}
            className="rounded-md object-cover w-20 h-20"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {selected.name}
            </h3>
            <button
              onClick={() => setSelected(null)}
              className="mt-2 text-sm text-blue-600 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
