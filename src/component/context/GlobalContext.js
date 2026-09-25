"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    experience: "",
    search: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        setJobs,
        filters,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
