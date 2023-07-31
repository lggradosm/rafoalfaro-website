import { NavLink } from "react-router-dom";

export default function SocialButtons({ icon, url }) {
  return (
    <NavLink
      to={url}
      target="_blank"
      className="w-8 h-8  p-2 group  duration-300 cursor-pointer rounded-fullflex rounded-full justify-center items-center"
    >
      <img
        src={icon}
        className="w-6 group-hover:opacity-60 duration-300 "
        alt=""
      />
    </NavLink>
  );
}
