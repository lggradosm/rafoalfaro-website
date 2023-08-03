import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import MapGoogle from "./MapGoogle";
export default function Contact() {
  return (
    <div className="max-w-[90vw] lg:w-4/5 min-h-[calc(100vh-3rem)] py-10 lg:py-0  page lg:my-0  mx-auto flex flex-col lg:flex-row items-center justify-center gap-16       text-white ">
      <div className="flex flex-col justify-between gap- w-full">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl lg:text-3xl mb-4">
              Horario de atención
            </h3>
            <p className="font-bold text-sm md:text-md ">Lunes a Viernes</p>
            <p className="font-light text-sm md:text-md">
              8:00 a.m. a 1:00 p.m. - 2:00 p.m a 6:00 p.m.
            </p>
          </div>
          <NavLink
            className={"text-sm block w-fit hover:brightness-75 duration-300"}
            target="_blank"
            to={
              "https://www.google.com/maps/dir/''/RAFO+ALFARO+%7C+Estudio+Creativo,+Avenida+Metropolitana+II,+Trujillo/@-8.1219289,-79.0410366,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x91ad3dc7290a7e81:0xf85b63b6ccff7344!3e0"
            }
          >
            <p>AV. METROPOLITANA 2 MZ. S1 LOTE 9, URB. SAN ISIDRO ETAPA II </p>
            <p className="mt-4">TRUJILLO - PERÚ</p>
          </NavLink>
          <NavLink
            className={"text-sm block w-fit  hover:brightness-75 duration-300"}
            to={"tel:+51949222588"}
          >
            +51 949222588
          </NavLink>
        </div>

        <div className="w-full lg:max-w-3xl  my-4 h-96">
          <MapGoogle />
        </div>
      </div>
      <div className="w-full  lg:max-w-xl   bg-neutral-950 p-6 lg:p-10  rounded-sm">
        <h3 className="text-3xl lg:text-xl mb-4">Escríbenos</h3>
        <form action="w-full">
          <div className="flex  gap-4">
            <Input autoFocus={true} label={"Nombres"} />
            <Input label={"Apellidos"} />
          </div>
          <Input label={"Correo"} />
          <Input label={"Asunto"} />
          <TextArea label={"Mensaje"} />
          <button
            disabled
            className="bg-white w-full text-black p-3 rounded-sm hover:brightness-90 duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
