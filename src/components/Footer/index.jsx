import SocialButtons from "./SocialButtons";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center h-12 px-2   ">
      <div className="w-full  flex flex-row justify-between ">
        <div className=" flex  flex-col  justify-center  gap-1 text-white">
          <p className="text-[.6em] md:text-xs ">
            &copy; 2023 Rafo Alfaro Estudio Creativo.
          </p>
        </div>
        <div className="">
          <ul className="flex justify-center md:justify-start gap-2 ">
            <SocialButtons
              icon={facebook}
              url={"https://www.facebook.com/rafoalfaro.pe"}
            />
            <SocialButtons
              icon={instagram}
              url={"https://www.instagram.com/rafoalfaro.pe/"}
            />
            <SocialButtons
              icon={whatsapp}
              url={"https://api.whatsapp.com/send?phone=51949222588"}
            />
            <SocialButtons
              icon={linkedin}
              url={
                "https://www.linkedin.com/company/rafo-alfaro-estudio-creativo/"
              }
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}
