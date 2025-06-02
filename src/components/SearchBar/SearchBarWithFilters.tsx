"use client";
import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { SearchIcon } from "./SearchIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { ClockIcon } from "./icons/ClockIcon";
import { CarIcon } from "./icons/CarIcon";
import { FilterButton } from "./FilterButton";
import { useState } from "react";

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
  };

  const handleSearchClick = () => {
    // Handle search click
    console.log("Search clicked");
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col bg-blue-400 gap-y-0 items-center w-full px-4 py-8 max-sm:px-2 max-sm:py-4">
        {/* Main Search Bar */}
        <div
          className="flex items-center w-full max-w-2/3 h-[60px] bg-white rounded-[28px] shadow-md
                               max-lg:max-w-[900px] max-sm:max-w-[350px] max-sm:h-[60px]"
        >
          <div className="flex items-center gap-1 flex-1 p-1">
            {/* Menu Button */}
            <div
              className="flex w-[66px] h-[79px] flex-col justify-center items-center
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
            <div className="flex w-full flex-col gap-2 p-4 justify-center items-center peer-focus:items-start">
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Busca tu destino..."
                  className={`w-full px-4 py-2 text-xl rounded-md transition-all duration-300 focus:outline-none
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
          className={"flex h-full py-2 justify-center items-center gap-5 w-full max-w-3/4 mt-4 max-lg:gap-5 max-lg:flex-wrap max-sm:flex-col max-sm:gap-4 max-sm:h-auto max-sm:py-2.5"}
        >
          <FilterButton
            icon={<BriefcaseIcon />}
            label="Tipo de Viaje"
            onClick={handleTripTypeClick}
          />
          <FilterButton
            icon={<ClockIcon />}
            label="Hora Salida"
            onClick={handleDepartureTimeClick}
          />
          <FilterButton
            icon={<CarIcon />}
            label="Vehiculo"
            onClick={handleVehicleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBarWithFilters;
