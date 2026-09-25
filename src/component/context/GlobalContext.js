"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <GlobalContext.Provider
      value={{
        jobs,
        setJobs,
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
