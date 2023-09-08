import image from "/images/studio/home-nosotros.webp";
export default function ProjectCover() {
  return (
    <div className=" w-full h-full bg-no-repeat bg-cover bg-center">
      <img src={image} alt="" className="h-full w-full" />
    </div>
  );
}
