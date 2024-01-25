import { useHomeContext } from "../../contexts/HomeProvider";
import LastProjects from "./LastProjects";
import SliderCovers from "./SliderCovers";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import ReactGa from 'react-ga4'
export default function Home() {
  const { loaded } = useHomeContext();
  useEffect(()=> {
    ReactGa.send({ hitType: "pageview", page: window.location.pathname, title: "Rafo Alfaro Estudio Creativo" });

  }, [])
  return (
    <Loading loadCondition={loaded}>

      <div className={`relative h-full  w-full  flex flex-col `}>
        <SliderCovers />
        <LastProjects />
      </div>
    </Loading>
  );
}
