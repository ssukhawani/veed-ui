
const Button = ({ imgSrc, text, hoverColor }) => {
  return (
    <button className="cursor-pointer transform transition-transform duration-500 ease-out hover:translate-y-[-2px] mq1150:w-full min-w-[14rem] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.06)] rounded-mini bg-white box-border flex flex-row items-center justify-start py-[0.562rem] pl-[0.5rem] gap-[0.75rem] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200 mq450:flex-1">
      <img
        className="h-[2.5rem] w-[2.5rem] relative rounded-3xs"
        alt=""
        src={imgSrc}
      />
      <div className={`hover:text-${hoverColor} relative text-[15px] flex justify-start w-full h-full items-center leading-[1.25rem] font-medium min-w-[6.438rem]`}>
        {text}
      </div>
    </button>
  );
};

export default Button;
