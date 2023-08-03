import React from "react";
import rafo_image from "/images/studio/rafo-alfaro.webp";
import image from "/images/studio/home-nosotros.webp";
import CollageImage from "./CollageImage";
import equipoDummy from "../../utils/equipoDummy";
import infraestructuraDummy from "../../utils/infraestructuraDummy";
import reel2 from "../../assets/videos/reel2.mp4";
import reel3 from "../../assets/videos/reel3.mp4";
import reel1 from "../../assets/videos/reel1.mp4";
import reel4 from "../../assets/videos/reel4.mp4";

export default function Studio() {
  return (
    <div className="relative loaded-page__animation">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" w-full bg-no-repeat bg-cover bg-center h-[50vh]"
      ></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5  gap-1 p-1">
        <CollageImage size={"bigSquare"} image={rafo_image} />
        <CollageImage
          size={"vertical"}
          type="text"
          text={`Somos Rafo Alfaro | Estudio Creativo. 
      Como oficina de arquitectura y diseño de interiores, nuestro objetivo es mejorar la calidad de vida de nuestros clientes y usuarios a través de nuestros conceptos, proyectos y edificaciones; en medio de una permanente búsqueda de la perfección y la simplicidad.`}
        />
        <CollageImage image={reel4} type="video" size={"vertical"} />
        <CollageImage
          size={"vertical"}
          type="text"
          text={`Nosotros creemos en el poder de la tecnología para poder llevar nuestros diseños y su impacto en el usuario al siguiente nivel. Por eso dentro de nuestros procesos hay un espacio destinado a la interacción inmersiva con los proyectos a través de la realidad virtual, una experiencia de 360 grados en la que nuestros clientes puedan sentir el espacio que habitarán, ser conscientes de los efectos que buscamos plasmar y reconocer los materiales y texturas que darán vida a nuestros trazos.`}
        />
        <CollageImage
          image={equipoDummy[3].image}
          type="team"
          name={equipoDummy[3].name}
          position={equipoDummy[3].position}
        />

        <CollageImage
          image={equipoDummy[5].image}
          type="team"
          name={equipoDummy[5].name}
          position={equipoDummy[5].position}
        />
        <CollageImage image={infraestructuraDummy[5]} size={"horizontal"} />

        <CollageImage
          image={equipoDummy[4].image}
          type="team"
          name={equipoDummy[4].name}
          position={equipoDummy[4].position}
        />
        <CollageImage
          image={equipoDummy[7].image}
          type="team"
          name={equipoDummy[7].name}
          position={equipoDummy[7].position}
        />

        <CollageImage image={infraestructuraDummy[1]} center={true} />
        <CollageImage
          image={equipoDummy[0].image}
          type="team"
          name={equipoDummy[0].name}
          position={equipoDummy[0].position}
        />
        <CollageImage image={reel2} type="video" />

        <CollageImage image={infraestructuraDummy[4]} center={true} />

        <CollageImage
          type="text"
          text={`Sabemos que un estudio de diseño que explota su lado creativo comprende mucho más que las capacidades intelectuales de sus integrantes. Es por eso que aquí todos y cada uno de los profesionales de este equipo, dejamos –en constante coautoría– una cuota de emoción y de pertenencia en cada nuevo reto que emprendemos. `}
        />
        <CollageImage
          image={equipoDummy[2].image}
          type="team"
          name={equipoDummy[2].name}
          position={equipoDummy[2].position}
        />
        <CollageImage image={infraestructuraDummy[9]} center={true} />
        <CollageImage
          image={equipoDummy[10].image}
          type="team"
          name={equipoDummy[10].name}
          position={equipoDummy[10].position}
        />
        <CollageImage image={reel3} type="video" />
        <CollageImage
          image={equipoDummy[17].image}
          type="team"
          name={equipoDummy[17].name}
          position={equipoDummy[17].position}
        />
        <CollageImage
          image={equipoDummy[9].image}
          type="team"
          name={equipoDummy[9].name}
          position={equipoDummy[9].position}
        />
        <CollageImage
          image={infraestructuraDummy[7]}
          center={true}
          size={"horizontal"}
        />
        <CollageImage
          image={equipoDummy[13].image}
          type="team"
          name={equipoDummy[13].name}
          position={equipoDummy[13].position}
        />
        <CollageImage image={infraestructuraDummy[8]} center={true} />
        <CollageImage
          image={equipoDummy[18].image}
          type="team"
          name={equipoDummy[18].name}
          position={equipoDummy[18].position}
        />
        <CollageImage image={reel1} type="video" />
        <CollageImage
          image={equipoDummy[16].image}
          type="team"
          name={equipoDummy[16].name}
          position={equipoDummy[16].position}
        />
        <CollageImage image={infraestructuraDummy[6]} center={true} />
      </div>
    </div>
  );
}
