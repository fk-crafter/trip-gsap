"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const destinations = [
  { name: "Kyoto", coordinates: [135.7681, 35.0116], image: "/img/kyoto.jpg" },
  {
    name: "Swiss Alps",
    coordinates: [8.2275, 46.8182],
    image: "/img/swiss-alps.jpg",
  },
  {
    name: "Black Forest",
    coordinates: [8.2, 48.0],
    image: "/img/black-forest.jpg",
  },
  { name: "Banff", coordinates: [-115.5708, 51.1784], image: "/img/banff.jpg" },
  {
    name: "New York",
    coordinates: [-74.006, 40.7128],
    image: "/img/new-york.jpg",
  },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], image: "/img/tokyo.jpg" },
  { name: "Paris", coordinates: [2.3522, 48.8566], image: "/img/paris.jpg" },
  {
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    image: "/img/sydney.jpg",
  },
  { name: "Sahara", coordinates: [13.0, 23.0], image: "/img/sahara.jpg" },
  { name: "Atacama", coordinates: [-68.25, -24.5], image: "/img/atacama.jpg" },
  {
    name: "Wadi Rum",
    coordinates: [35.4194, 29.5328],
    image: "/img/wadi-rum.jpg",
  },
  {
    name: "Death Valley",
    coordinates: [-116.8258, 36.5054],
    image: "/img/death-valley.jpg",
  },
  {
    name: "Maldives",
    coordinates: [73.2207, 3.2028],
    image: "/img/maldives.jpg",
  },
  {
    name: "Bora Bora",
    coordinates: [-151.7415, -16.5004],
    image: "/img/bora-bora.jpg",
  },
  { name: "Tulum", coordinates: [-87.4667, 20.211], image: "/img/tulum.jpg" },
  { name: "Bali", coordinates: [115.1889, -8.4095], image: "/img/bali.jpg" },
];

type Geo = {
  rsmKey: string;
  [key: string]: unknown;
};

export default function WorldMap() {
  const [selected, setSelected] = useState<null | (typeof destinations)[0]>(
    null
  );
  const [zoom, setZoom] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="w-full h-[100vh] flex items-center justify-center bg-white">
        <p className="text-black">Loading map...</p>
      </section>
    );
  }

  return (
    <section className="w-full h-[100vh] z-50 bg-sky flex items-center justify-center relative">
      <ComposableMap
        projection="geoEqualEarth"
        width={980}
        height={500}
        style={{ width: "80%", height: "80%" }}
      >
        <ZoomableGroup zoom={zoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: Geo[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#f5f5f5",
                      stroke: "#d6d6d6",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#d1e3ff",
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
              <circle r={5} fill="#0ea5e9" stroke="white" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  fill: "#1e293b",
                  pointerEvents: "none",
                }}
              >
                {dest.name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      <div className="absolute top-6 right-6 flex flex-col gap-2 z-30">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
          className="bg-white text-black w-10 h-10 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200"
        >
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}
          className="bg-white text-black w-10 h-10 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200"
        >
          −
        </button>
      </div>

      {selected && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-5 flex items-center gap-5 max-w-md z-30 border border-gray-200 animate-fade-in">
          <Image
            src={selected.image}
            alt={selected.name}
            width={90}
            height={90}
            className="rounded-lg object-cover w-[90px] h-[90px]"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {selected.name}
            </h3>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
