import { TheHeader } from "./components/TheHeader";
import { FilterPanel } from "./features/filter/FilterPanel";
import { JobList } from "./features/positions/JobList";
import React from "react";


 
function App() {
   

  return (
    <>
      <TheHeader/>
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
