import { createContext, useContext, useEffect, useState } from "react";
import { getLastProjects } from "../services/ProjectService";
import { getCovers } from "../services/CoverService";
const HomeContext = createContext();

export function HomeContextProvider({ children }) {
  const [lastProjects, setLastProjects] = useState([]);
  const [covers, setCovers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLastProjects(getLastProjects())
    console.log(getLastProjects())
    Promise.all([ getCovers()]).then(
      ([ coversSnapshot]) => {
        const coversData = coversSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
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
