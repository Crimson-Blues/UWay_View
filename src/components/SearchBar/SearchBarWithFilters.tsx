"use client";
import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { SearchIcon } from "./SearchIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { ClockIcon } from "./icons/ClockIcon";
import { CarIcon } from "./icons/CarIcon";
import { FilterButton } from "./FilterButton";
import { useState } from "react";
import type {OptionType} from "./DropDown.tsx";
import {cn} from "../../lib/utils.ts";

export function SearchBarWithFilters() {

  const [name, setName] = useState("");

  const handleTripTypeClick = () => {
    // Handle trip type filter
    console.log("Trip type filter clicked");
  };

  const handleDepartureTimeClick = () => {
    // Handle departure time filter
    console.log("Departure time filter clicked");
  };

  const handleVehicleClick = () => {
    // Handle vehicle filter
    console.log("Vehicle filter clicked");
  };

  const handleMenuClick = () => {
    // Handle menu click
    console.log("Menu clicked");
    toggleFilters();
  };

  const handleSearchClick = () => {
    // Handle search click
    console.log("Search clicked");
  };

  const TravelTypeoptions: OptionType[] = [
    { value: "local", label: "Local" },
    { value: "campus", label: "Campus" },
    { value: "intermunicipal", label: "Intermunicipal" },
  ];

  const VehicleOptions: OptionType[] = [
    { value: "auto", label: "Auto" },
    { value: "moto", label: "Moto" },
  ];

  const TimeOptions: OptionType[] = [
    { value: "am", label: "A.M" },
    { value: "pm", label: "P.M" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => setIsOpen(prev => !prev);

  return (
    <div className="flex-grow shrink-0 flex-col w-max h-max z-20 relative">
      <div className="flex flex-col  gap-y-0 items-center w-max px-4 py-8 max-sm:px-2 max-sm:py-4">
        {/* Main Search Bar */}
        <div
          className="flex-grow shrink-0 z-10 items-center w-max h-max bg-white rounded-[28px] shadow-md
                               max-lg:max-w-[900px] max-sm:max-w-[350px] max-sm:h-[60px]"
        >
          <div className="flex items-center w-max h-max gap-1 flex-1 p-1">
            {/* Menu Button */}
            <div
              className="flex w-max h-max flex-col justify-center items-center
                                       max-sm:w-[50px] max-sm:h-[60px]"
            >
              <div className="flex justify-center items-center rounded-full">
                <button
                  onClick={handleMenuClick}
                  className="flex pr-2 justify-center items-center hover:bg-gray-100 rounded-full transition-colors"
                >
                  <MenuIcon className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[39px]" />
                </button>
              </div>
            </div>

            {/* Search Input Area */}
            <div className="flex h-max flex-col justify-center items-center peer-focus:items-start">
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Busca tu destino..."
                  className={`w-full h-max px-4 py-2 text-xl rounded-md transition-all duration-300 focus:outline-none
      ${name ? "text-left" : "text-center"}`}
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center items-center">
              <button
                  onClick={handleSearchClick}
                  className={"flex w-10 h-10 items-center justify-center  hover:bg-gray-300 rounded-full"}
              >
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className={cn("flex h-full py-2 z-0 justify-center items-center gap-5 w-max mt-4 max-lg:gap-5 max-lg:flex-wrap max-sm:flex-col max-sm:gap-4 max-sm:h-auto max-sm:py-2.5",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full",
              "transition-all duration-350"
          )}
        >
          <FilterButton
            icon={<BriefcaseIcon />}
            label="Tipo de Viaje"
            options={TravelTypeoptions}
          />
          <FilterButton
            icon={<ClockIcon />}
            label="Hora Salida"
            options={TimeOptions}
          />
          <FilterButton
            icon={<CarIcon />}
            label="Vehiculo"
            options={VehicleOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBarWithFilters;
