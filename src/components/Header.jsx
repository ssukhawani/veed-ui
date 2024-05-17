const Header = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
      {/* Header Left */}
      <div className="flex flex-col items-start justify-start pt-[0.656rem] px-[0rem] pb-[0rem]"></div>

      {/* Header right */}
      <div className="font-inter flex flex-row items-center justify-center gap-[0.25rem] max-w-full text-gray-300 flex-wrap-reverse">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.25rem]">
          <div className="rounded-6xs cursor-pointer hover:bg-[#FFDAA3] bg-antiquewhite flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.418rem]">
            <div className="relative leading-[1rem] font-medium inline-block min-w-[3.375rem]">
              Upgrade
            </div>
            <img
              className="h-[1rem] w-[1rem] relative min-h-[1rem]"
              alt=""
              src="/frame-11.svg"
            />
          </div>
          <div className="group rounded-6xs cursor-pointer hover:bg-[#EEEEF0] flex flex-row items-center justify-center gap-[0.75rem] py-[0.7rem] px-[1.25rem]">
            <img
              className="h-[1.125rem] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-10.svg"
            />
            <div className="relative leading-[1rem] text-[#A5A7AD] font-medium group-hover:text-[#5C5E65]">
              Search
            </div>
          </div>

          <div className="flex-1 cursor-pointer hover:bg-[#E1E1E3] rounded-6xs bg-whitesmoke-200 flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-gray-200 border-[1px] border-solid border-whitesmoke-200">
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/frame-12.svg"
            />
            <div className="relative leading-[1rem] font-medium inline-block min-w-[2.188rem]">
              Invite
            </div>
          </div>
        </div>
        <div className="flex p-2 cursor-pointer hover:bg-[#E1E1E3] rounded-6xs items-center justify-center">
          <img
            className="w-[1.5rem] h-[1.5rem] relative"
            loading="lazy"
            alt=""
            src="/frame-13.svg"
          />
        </div>
        <div className="flex cursor-pointer  flex-row items-start justify-start gap-[0.75rem]">
          <img
            className="h-[2.5rem] w-[2.5rem] relative rounded-[40px] overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/frame-15@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
