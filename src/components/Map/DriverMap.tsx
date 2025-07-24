import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import * as React from "react";
import { cn } from "../../lib/utils.ts";
import MapUpdater from "./MapUpdater";
import { useState } from "react";
import { useEffect, useRef } from "react";

type MapProps = {
    className?: string;
    latitude: number;
    longitude: number;
};

const Map: React.FC<MapProps> = ({ className, latitude, longitude}) => {
    const [pin, setPin] = useState<{ lat: number; lng: number }>({
        lat: latitude,
        lng: longitude,
    });
    useEffect(() => {
        if (latitude !== 0 && longitude !== 0) {
            setPin({ lat: latitude, lng: longitude });
        }
    }, [latitude, longitude]);


    const popupRef = useRef(null);
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} className={cn("z-0", className)}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[pin.lat, pin.lng]}
                ref={popupRef}
            >
                <Popup>
                    ¡Aquí Estás!
                </Popup>
            </Marker>
            <MapUpdater latitude={latitude} longitude={longitude} />
        </MapContainer>
    );
};

export default Map;