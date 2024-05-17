import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 bottom-0 mq1150:h-[100svh] w-[16rem] shadow-[0px_4px_5px_rgba(29,_29,_31,_0.05)] bg-white box-border flex flex-col items-start justify-start px-[1rem] pt-[1.5rem] gap-[1rem] text-right text-[1.188rem] text-white font-inter border-r-[1px] border-solid border-whitesmoke-300 border-l-[1px] mq1150:hidden">
      {/* Logo */}
      <img
        className="h-[1.375rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/frame.svg"
      />

      {/* Sidebar */}
      <div className="self-stretch flex flex-row rounded-lg items-end justify-center gap-[0.875rem] hover:bg-whitesmoke-100 cursor-pointer">
        <div className="w-[3.5rem] rounded-lg bg-palevioletred flex flex-row items-start justify-start py-[0.937rem] pr-[1.187rem] pl-[1.181rem] box-border">
          <b className="flex-1 relative leading-[1.75rem] uppercase inline-block min-w-[1.15rem] shrink-0">
            M
          </b>
        </div>
        <div className="flex-1 flex items-start pt-[0rem] px-[0rem] pb-[0.625rem] text-left text-[0.938rem] text-gray-300">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-end justify-start gap-[1rem]">
              <div className="flex">
                <div className="font-inter font-medium max-w-[110px] text-ellipsis relative leading-[1.188rem] flex items-center shrink-0">
                  Sahil&apos;s workspace
                </div>
                {"..."}
              </div>
              <img
                className="h-[0.375rem] w-[0.375rem] relative"
                alt=""
                src="/frame-1.svg"
              />
            </div>
            <div className="relative text-[0.813rem] leading-[1rem] font-medium text-gray-400 inline-block min-w-[3.625rem] mt-[-0.063rem]">
              Free Plan
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar links */}
      <div className="self-stretch flex flex-col justify-between items-center">
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] gap-[0.75rem] text-center text-[0.813rem] mq800:pb-[14.625rem] mq800:box-border">
          <SidebarList />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
