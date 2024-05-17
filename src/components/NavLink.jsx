import { Link } from "react-router-dom";

function NavLink({ title, iconUrl, isSpecial, isActive }) {
  return (
    <Link
      to="#"
      className={`self-stretch no-underline rounded-lg ${
        isActive && "bg-whitesmoke-200"
      } flex flex-row items-start justify-between py-[0.875rem] px-[1rem] ${
        isSpecial ? "gap-[1.25rem]" : "gap-[0.75rem]"
      } z-[99] hover:bg-whitesmoke-100`}
    >
      <div className="flex gap-[0.75rem] items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
          loading="lazy"
          alt={title}
          src={iconUrl}
        />
        <span className="relative leading-[1.25rem] text-[#18191B] font-medium inline-block min-w-[2.688rem]">
          {title}
        </span>
      </div>
      {isSpecial && (
        <img
          className="h-[1.5rem] w-[1.5rem] relative rounded-5xs-2 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/frame-8.svg"
        />
      )}
    </Link>
  );
}

export default NavLink;
