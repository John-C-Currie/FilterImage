import { useState } from "react";
import UploadAndDisplayImage from "./components/UploadAndDisplayImage";
import FilterDropdown from "./components/FilterDropdown";
import "./App.css";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("none");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const resetFilter = () => {
      setSelectedFilter("none");
      const filterDropdown = document.querySelector("select");
      if (filterDropdown) {
        filterDropdown.value = "none";
      }
  }

  return (
    <>
      <div>
        <UploadAndDisplayImage selectedFilter={selectedFilter} onImageRemove={resetFilter}/>
      </div>
      <div>
        <FilterDropdown onFilterChange={handleFilterChange}/>
      </div>
    </>
  );
}

export default App;
