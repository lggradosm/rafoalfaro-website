import { createContext, useContext, useEffect, useState } from "react";
import { getCover, getProjectsGallery } from "../services/ProjectService";
const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
  const [coverProject, setCoverProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Promise.all([getCover(), getProjectsGallery()]).then(
      ([coverSnapshot, projectSnapshot]) => {
        const data = coverSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const projectData = projectSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCoverProject(data[0]);
        setProjects(projectData);
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
