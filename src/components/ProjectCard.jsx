
const ProjectCard = ({ imgSrc, status, projectName, time }) => {
  return (
    <div className="w-[22.5rem] self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
      <div className="self-stretch h-[12.656rem] rounded-8xs overflow-hidden shrink-0 flex flex-row items-start justify-start relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src={imgSrc}
        />
        <div className="rounded-8xs flex items-center justify-center bg-coral text-white z-[3] absolute right-2 top-2 px-[6px] py-[2px]">
          <div className="text-[13px] font-semibold inline-block">
            {status}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem] gap-[0.125rem] text-gray-300">
        <div className="relative leading-[1rem] font-medium inline-block min-w-[5.25rem]">
          {projectName}
        </div>
        <div className="relative text-[0.719rem] tracking-[0.12px] leading-[0.75rem] text-darkgray inline-block min-w-[7.813rem] whitespace-nowrap">
          {time}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
