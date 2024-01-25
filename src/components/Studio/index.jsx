import rafo_image from "/images/studio/rafo-alfaro.webp";
import image from "/images/studio/home-nosotros.webp";
import CollageImage from "./CollageImage";
import equipoDummy from "../../utils/equipoDummy";
import infraestructuraDummy from "../../utils/infraestructuraDummy";
import reel2 from "../../assets/videos/reel2.mp4";
// import reel3 from "../../assets/videos/reel3.mp4";
import reel1 from "../../assets/videos/reel1.mp4";
import reel4 from "../../assets/videos/reel4.mp4";
import { useEffect } from "react";
import ReactGa from 'react-ga4'
export default function Studio() {
  useEffect(()=> {
    ReactGa.send({ hitType: "pageview", page: window.location.pathname, title: "Estudio" });
  }, [])
  return (
    <div className="relative loaded-page__animation">

      <div className=" w-full bg-no-repeat bg-cover bg-center">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4  gap-1 p-1">
        <CollageImage
          size={"bigSquare"}
          image={rafo_image}
          type="boss"
          name={"Rafo Alfaro"}
          position={"Director Creativo"}
        />
        <CollageImage
          size={"vertical"}
          type="text"
          signed={true}
          text={`Somos Rafo Alfaro | Estudio Creativo. 
      Como oficina de arquitectura y diseño de interiores, nuestro objetivo es mejorar la calidad de vida de nuestros clientes y usuarios a través de nuestros conceptos, proyectos y edificaciones; en medio de una permanente búsqueda de la perfección y la simplicidad.`}
        />
        <CollageImage image={reel4} type="video" size={"vertical"} />
        <CollageImage
          
          type="text"
          text={`Nosotros creemos en el poder de la tecnología para poder llevar nuestros diseños y su impacto en el usuario al siguiente nivel. Por eso dentro de nuestros procesos hay un espacio destinado a la interacción inmersiva con los proyectos a través de la realidad virtual, una experiencia de 360 grados en la que nuestros clientes puedan sentir el espacio que habitarán, ser conscientes de los efectos que buscamos plasmar y reconocer los materiales y texturas que darán vida a nuestros trazos.`}
        />
        {/* <CollageImage
          image={equipoDummy["Diego"].image}
          type="team"
          name={equipoDummy["Diego"].name}
          position={equipoDummy["Diego"].position}
        /> */}
         {/* <CollageImage
          image={infraestructuraDummy[4]}
          center
          size={"horizontal"}
        /> */}

{/* 
        <CollageImage
          image={equipoDummy["Johan"].image}
          type="team"
          name={equipoDummy["Johan"].name}
          position={equipoDummy["Johan"].position}
        />
        <CollageImage image={infraestructuraDummy[3]} center={true} /> */}


        {/* <CollageImage
          image={equipoDummy["Carlos Zapata"].image}
          type="team"
          name={equipoDummy["Carlos Zapata"].name}
          position={equipoDummy["Carlos Zapata"].position}
        />
         <CollageImage         className={"2xl:block hidden"}
         image={infraestructuraDummy[2]} center={true} size={'vertical'} />
        <CollageImage         className={"2xl:hidden block"}
         image={infraestructuraDummy[9]} center={true}  /> */}
        

       
       
        <CollageImage image={reel2} type="video" />
        {/* <CollageImage   image={infraestructuraDummy[11]} center={true} /> */}
        <CollageImage
          type="text"
          text={`Sabemos que un estudio de diseño que explota su lado creativo comprende mucho más que las capacidades intelectuales de sus integrantes. Es por eso que aquí todos y cada uno de los profesionales de este equipo, dejamos –en constante coautoría– una cuota de emoción y de pertenencia en cada nuevo reto que emprendemos. `}
        />


        {/* <CollageImage image={infraestructuraDummy[6]} className={"2xl:block hidden"} center={true} size={"horizontal"}/> */}
        {/* <CollageImage image={infraestructuraDummy[6]}  className={"2xl:hidden block"} center={true} /> */}

        {/* <CollageImage
          image={equipoDummy["Marykarly"].image}
          type="team"
          name={equipoDummy["Marykarly"].name}
          position={equipoDummy["Marykarly"].position}
        />
        
        <CollageImage image={infraestructuraDummy[8]} center={true} /> */}

        

        {/* <CollageImage
          image={equipoDummy["Anthony"].image}
          type="team"
          name={equipoDummy["Anthony"].name}
          position={equipoDummy["Anthony"].position}
        /> */}
          {/* <CollageImage image={reel3} type="video" /> */}
          <CollageImage
          image={equipoDummy["Ghelenn"].image}
          type="team"
          name={equipoDummy["Ghelenn"].name}
          position={equipoDummy["Ghelenn"].position}
        />
        <CollageImage
          image={equipoDummy["Gabriel"].image}
          type="team"
          name={equipoDummy["Gabriel"].name}
          position={equipoDummy["Gabriel"].position}
        />
        <CollageImage
          image={equipoDummy["Nashla"].image}
          type="team"
          name={equipoDummy["Nashla"].name}
          position={equipoDummy["Nashla"].position}
        />
        <CollageImage className={'2xl:block hidden'} image={infraestructuraDummy[5]}  center />
        <CollageImage className={'2xl:hidden block'} i image={infraestructuraDummy[5]}  center />

        <CollageImage
          image={equipoDummy["Alonso"].image}
          type="team"
          name={equipoDummy["Alonso"].name}
          position={equipoDummy["Alonso"].position}
        />
    
        <CollageImage image={reel1} type="video" />
       

       

        <CollageImage
          image={equipoDummy["Carlos Miranda"].image}
          type="team"
          name={equipoDummy["Carlos Miranda"].name}
          position={equipoDummy["Carlos Miranda"].position}
        />  
       <CollageImage  image={infraestructuraDummy[10]} center={true} />

        

<CollageImage
          image={equipoDummy["Valeria Ruiz"].image}
          type="team"
          name={equipoDummy["Valeria Ruiz"].name}
          position={equipoDummy["Valeria Ruiz"].position}
        /> 

      </div>
    </div>
  );
}
