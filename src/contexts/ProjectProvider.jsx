import { createContext, useContext, useEffect, useState } from "react";
import { getCover, getProjectsGallery } from "../services/ProjectService";
import { projects as allProjects } from "../utils/Projects";
const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
  const [coverProject, setCoverProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setProjects(allProjects)
    Promise.all([getCover()]).then(
      ([coverSnapshot]) => {
        const data = coverSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCoverProject(data[0]);
        setLoaded(true);
      }
    );
  }, []);
  return (
    <ProjectContext.Provider
      className="relative"
      value={{ coverProject, loaded, projects }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const projectContext = useContext(ProjectContext);
  if (projectContext === undefined)
    throw new Error("Context must be used within a Provider");
  return projectContext;
}
