import NavHeader from "./components/NavHeader/NavHeader.tsx";
import SearchBarWithFilters from "./components/SearchBar/SearchBarWithFilters.tsx";

function Index() {
  return (
    <main className={"bg-amber-200"}>
      <NavHeader />
        <SearchBarWithFilters />
    </main>
  );
}

export default Index;
