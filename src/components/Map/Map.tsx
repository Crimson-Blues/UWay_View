import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import * as React from "react";
import { cn } from "../../lib/utils.ts";

type MapProps = {
    className?: string;
};

const Map: React.FC<MapProps> = ({ className }) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={cn("z-0", className)}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;