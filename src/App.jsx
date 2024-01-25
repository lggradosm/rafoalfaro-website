import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HomeContextProvider } from "./contexts/HomeProvider";
import { ProjectContextProvider } from "./contexts/ProjectProvider";
import ProjectDetail from "./components/Projects/ProjectDetail";
import useProjectsReducer from "./hooks/useProjectsReducer.js";
import { useEffect } from "react";
import ReactGa from 'react-ga4'
import { HelmetProvider } from "react-helmet-async";
function App() {
  const projectsReducer = useProjectsReducer();
  ReactGa.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID)
  useEffect(() => {
    projectsReducer.getProjects();
  }, []);

  return (
    <BrowserRouter>
    <HelmetProvider>
    <main className="min-h-[calc(100vh-130px)]">
        <Navbar />
        <Routes>
          <Route
            element={
              <HomeContextProvider>
                <Home />
              </HomeContextProvider>
            }
            path={"/*"}
          />
          <Route
            element={
              <ProjectContextProvider>
                <Projects />
              </ProjectContextProvider>
            }
            path={`/proyectos`}
          />
          <Route element={<ProjectDetail />} path={`/proyectos/:id`} />
          <Route element={<Studio />} path={`/estudio`} />
          <Route element={<Contact />} path={`/contacto`} />
          <Route element={<Navigate to="/" />} path={`*`} />
        </Routes>
      </main>
      <Footer />
    </HelmetProvider>
     
    </BrowserRouter>
  );
}

export default App;
