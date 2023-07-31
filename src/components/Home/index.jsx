import { useHomeContext } from "../../contexts/HomeProvider";
import LastProjects from "./LastProjects";
import SliderCovers from "./SliderCovers";
import Loading from "../../components/Loading";
export default function Home() {
  const { loaded } = useHomeContext();
  return (
    <Loading loadCondition={loaded}>
      <div className={`relative h-full  w-full  flex flex-col `}>
        <SliderCovers />
        <LastProjects />
      </div>
    </Loading>
  );
}
