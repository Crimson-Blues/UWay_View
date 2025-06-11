import NavHeader from "../components/NavHeader/NavHeader.tsx";
import SearchBarWithFilters from "../components/SearchBar/SearchBarWithFilters.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import {TripsSideBar} from "../components/SideBar/TripsSideBar.tsx";
import {HelmetIcon} from "../components/NavHeader/Icons.tsx";
import Map from "../components/Map/Map.tsx";
import {useState} from "react";
import * as React from "react";

// Mock data for demonstration
const mockTrips = [
    {
        id: "1",
        route: "Cámbulos - Mélendez",
        rating: 4.0,
        reviewCount: 5,
        departureDay: "Martes",
        departureTime: "9:00 am",
        vehicleType: "Moto" as const,
        driverName: "Liseth Natalia",
    },
    {
        id: "2",
        route: "Palmira - Cali",
        rating: 3.0,
        reviewCount: 9,
        departureDay: "Miércoles",
        departureTime: "5:00 am",
        vehicleType: "Auto" as const,
        driverName: "Juan Moreno",
    },
];

function Passenger() {
    const [trips, setTrips] = useState(mockTrips);
    const [latitude, setLat] = useState(0);
    const [longitude, setLong] = useState(0);

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/driver");
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    console.log(result);
                    if (result.state !== "denied") {
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    function success(pos) {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        setLat(crd.latitude);
        setLong(crd.longitude);
    }

    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const handleRemoveTrip = (tripId: string) => {
        setTrips(prevTrips => prevTrips.filter(trip => trip.id !== tripId));
    };

  return (
    <main className="bg-amber-200 h-full w-full flex flex-col">
        <NavHeader title={"Modo Pasajero"} icon={<HelmetIcon/>} handleClick={handleClickLogo} />
        <div className="flex-1 flex-col w-full h-full justify-center justify-items-center relative">
            <SearchBarWithFilters />
            <Map className={"h-full w-full absolute top-0 left-0 z-0"} latitude={latitude as unknown as number} longitude={longitude as unknown as number} />
            <TripsSideBar
            trips = {trips}
            onRemoveTrip = {handleRemoveTrip}/>
        </div>
    </main>
  );
}

export default Passenger;
