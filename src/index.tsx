import NavHeader from "./components/NavHeader/NavHeader.tsx";
import SearchBarWithFilters from "./components/SearchBar/SearchBarWithFilters.tsx";
import {TripsSideBar} from "./components/SideBar/TripsSideBar.tsx";
import Map from "./components/Map/Map.tsx";

function Index() {
  return (
    <main className="bg-amber-200 h-full w-full flex flex-col">
        <NavHeader />
        <div className="flex-1 flex-col w-full h-full justify-center justify-items-center relative">
            <SearchBarWithFilters />
            <Map className={"h-full w-full absolute top-0 left-0 z-0"}/>
            <TripsSideBar />
        </div>
    </main>
  );
}

export default Index;
