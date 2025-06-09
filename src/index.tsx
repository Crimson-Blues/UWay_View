import NavHeader from "./components/NavHeader/NavHeader.tsx";
import SearchBarWithFilters from "./components/SearchBar/SearchBarWithFilters.tsx";
import {TripsSideBar} from "./components/SideBar/TripsSideBar.tsx";

function Index() {
  return (
    <main className="bg-amber-200 h-full w-full flex flex-col">
        <NavHeader />
        <div className="flex-1 relative flex w-full h-full">
            <SearchBarWithFilters />
            <TripsSideBar />
        </div>
    </main>
  );
}

export default Index;
