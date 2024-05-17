const Button = ({ imgSrc, text, hoverColor, isNew }) => {
  return (
    <button className="relative font-medium cursor-pointer transform transition-transform duration-500 ease-out hover:translate-y-[-2px] mq1150:w-full min-w-[19rem] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.06)] rounded-mini bg-white box-border flex flex-row items-center justify-start py-[0.562rem] pl-[0.5rem] gap-[0.75rem] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200 mq450:flex-1">
      <img
        className="h-[2.5rem] w-[2.5rem] relative rounded-3xs"
        alt=""
        src={imgSrc}
      />
      <div
        className={`font-inter font-medium text-[#09090B] hover:text-${hoverColor} relative text-[15px] flex justify-start w-full h-full items-center leading-[1.25rem] font-medium`}
      >
        {text}
      </div>
      {isNew && (
        <div className="font-inter font-semibold rounded-[4px] flex items-center justify-center px-[4px] py-[2px] bg-[#E0E4FF] text-[#5666F5] z-[3] absolute top-1/2 right-5 transform -translate-y-1/2">
          <div className="text-[9px] inline-block">NEW</div>
        </div>
      )}
    </button>
  );
};

export default Button;
