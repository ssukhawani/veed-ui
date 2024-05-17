import { sideLinks } from "@/constants/sidelinks";
import NavLink from "./NavLink";

const SidebarList = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[0.938rem] text-gray-300">
      {sideLinks.map(({ ...props }, index) => {
        return <NavLink key={index} {...props} />;
      })}
    </div>
  );
};

export default SidebarList;
