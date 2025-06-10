import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import * as React from "react";
import { cn } from "../../lib/utils.ts";
import MapUpdater from "./MapUpdater";

type MapProps = {
    className?: string;
    latitude: number;
    longitude: number;
};

const Map: React.FC<MapProps> = ({ className, latitude, longitude}) => {
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} className={cn("z-0", className)}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    Tú estás aquí <br /> Doxxeado JAJA.
                </Popup>
            </Marker>
            <MapUpdater latitude={latitude} longitude={longitude} />
        </MapContainer>
    );
};

export default Map;