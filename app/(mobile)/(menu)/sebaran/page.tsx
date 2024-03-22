"use client";

import { AppBar } from "../../_components/app-bar";
import leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { use, useEffect, useState } from "react";
import axios from "axios";

const markerIcon = leaflet.icon({
  iconUrl: "/placeholder.png",
  iconSize: [32, 32],
  iconAnchor: [32 / 2, 32],
});

const SebaranHasilPage = () => {
  const [address, setAddress] = useState("");

  const getAddress = async (lat: number, lng: number) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      setAddress(response.data.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Address not found");
    }
  };

  useEffect(() => {
    getAddress(-6.894548, 107.639606);
  }, []);

  return (
    <div className="py-16 h-full">
      <AppBar />
      <MapContainer
        center={[-6.896111400244597, 107.6388168035201]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.8939905, 107.6374131]} icon={markerIcon}>
          <Popup>John</Popup>
        </Marker>

        <Marker position={[-6.894548, 107.639606]} icon={markerIcon}>
          <Popup>
            Nama Pasien: Sutrinso <br />
            Tinggal: {address} <br />
            Tanggal Cek: 10 Maret 2024 <br />
            Kondisi Terakhir: Sehat <br />
            Edukasi: Video <br />
          </Popup>
        </Marker>

        <Marker
          position={[-6.897118126196414, 107.635322561413]}
          icon={markerIcon}
        >
          <Popup>Jane</Popup>
        </Marker>
        <Marker
          position={[-6.896342285256117, 107.63765829811456]}
          icon={markerIcon}
        >
          <Popup>Josep</Popup>
        </Marker>
        <Marker
          position={[-6.895385488564343, 107.63613003650603]}
          icon={markerIcon}
        >
          <Popup>Jess</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SebaranHasilPage;
