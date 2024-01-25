import { createContext, useContext, useEffect, useState } from "react";
import { getLastProjects } from "../services/ProjectService";
import { getCovers } from "../services/CoverService";
const HomeContext = createContext();

export function HomeContextProvider({ children }) {
  const [lastProjects, setLastProjects] = useState([]);
  const [covers, setCovers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([getLastProjects(), getCovers()]).then(
      ([projectsSnapshot, coversSnapshot]) => {
        const projectsData = projectsSnapshot
        const coversData = coversSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLastProjects(projectsData);
        setCovers(coversData);
        setLoaded(true);
      }
    );
  }, []);

  return (
    <HomeContext.Provider value={{ lastProjects, covers, loaded }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (context === undefined)
    throw new Error("Context must be used whithin a Provider");
  return context;
}
