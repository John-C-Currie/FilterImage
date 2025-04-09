import { useState } from "react";
import UploadAndDisplayImage from "./components/UploadAndDisplayImage";
import FilterDropdown from "./components/FilterDropdown";
import "./App.css";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("none");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <div>
        <UploadAndDisplayImage selectedFilter={selectedFilter} />
      </div>
      <div>
        <FilterDropdown onFilterChange={handleFilterChange} />
      </div>
    </>
  );
}

export default App;
