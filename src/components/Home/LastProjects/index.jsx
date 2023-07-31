import { useHomeContext } from "../../../contexts/HomeProvider";
import LastProjectItem from "./LastProjectItem";
export default function LastProjects() {
  const { lastProjects } = useHomeContext();
  return (
    <section className="px-1 md:px-0 mt-20 md:w-full  text-white ">
      <div className="lg:container mx-auto  w-full p-1 lg:p-0 ">
        <h2 className="font-bold text-2xl mb-10">Últimos proyectos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 mt-4 gap-1">
          {lastProjects?.map((item, index) => (
            <LastProjectItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
